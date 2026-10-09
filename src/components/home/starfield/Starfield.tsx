"use client"

import { useEffect, useRef } from "react"
import { generateStars } from "./generateStars"
import { CLOUD_FRAGMENT, CLOUD_VERTEX, STAR_FRAGMENT, STAR_VERTEX } from "./shaders"

type Props = {
  className?: string
  onUnsupported?: () => void
}

const compile = (gl: WebGL2RenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

// Rotation matrix (column-major) for yaw around Y then pitch around X.
const rotation = (yaw: number, pitch: number) => {
  const cy = Math.cos(yaw)
  const sy = Math.sin(yaw)
  const cp = Math.cos(pitch)
  const sp = Math.sin(pitch)
  return new Float32Array([cy, sp * sy, -cp * sy, 0, cp, sp, sy, -sp * cy, cp * cy])
}

const Starfield = ({ className, onUnsupported }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl2", { antialias: false, premultipliedAlpha: true, alpha: true })
    if (!gl) return onUnsupported?.()

    const vs = compile(gl, gl.VERTEX_SHADER, STAR_VERTEX)
    const fs = compile(gl, gl.FRAGMENT_SHADER, STAR_FRAGMENT)
    if (!vs || !fs) return onUnsupported?.()
    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return onUnsupported?.()
    gl.useProgram(program)

    // Each pass keeps its own vertex state.
    const starVao = gl.createVertexArray()!
    gl.bindVertexArray(starVao)

    const small = window.matchMedia("(max-width: 640px)").matches
    const stars = generateStars(small ? 2400 : 4200, small ? 300 : 700)

    const buffers: WebGLBuffer[] = []
    const bind = (name: string, data: Float32Array, size: number) => {
      const buffer = gl.createBuffer()!
      buffers.push(buffer)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
      const loc = gl.getAttribLocation(program, name)
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0)
    }
    bind("aPosition", stars.positions, 3)
    bind("aMagnitude", stars.magnitudes, 1)
    bind("aTemperature", stars.temperatures, 1)
    bind("aPhase", stars.phases, 1)

    // Cloud pass: one fullscreen triangle. If it fails to compile, the stars still render.
    const cvs = compile(gl, gl.VERTEX_SHADER, CLOUD_VERTEX)
    const cfs = compile(gl, gl.FRAGMENT_SHADER, CLOUD_FRAGMENT)
    let cloud: WebGLProgram | null = null
    const cloudVao = gl.createVertexArray()!
    if (cvs && cfs) {
      cloud = gl.createProgram()!
      gl.attachShader(cloud, cvs)
      gl.attachShader(cloud, cfs)
      gl.linkProgram(cloud)
      if (!gl.getProgramParameter(cloud, gl.LINK_STATUS)) cloud = null
    }
    const cu = cloud
      ? {
          resolution: gl.getUniformLocation(cloud, "uResolution"),
          time: gl.getUniformLocation(cloud, "uTime"),
          parallax: gl.getUniformLocation(cloud, "uParallax"),
          intro: gl.getUniformLocation(cloud, "uIntro"),
          scroll: gl.getUniformLocation(cloud, "uScroll"),
        }
      : null
    if (cloud) {
      gl.bindVertexArray(cloudVao)
      const quad = gl.createBuffer()!
      buffers.push(quad)
      gl.bindBuffer(gl.ARRAY_BUFFER, quad)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
      const loc = gl.getAttribLocation(cloud, "aQuad")
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
    }
    gl.bindVertexArray(null)

    const u = {
      rotation: gl.getUniformLocation(program, "uRotation"),
      aspect: gl.getUniformLocation(program, "uAspect"),
      time: gl.getUniformLocation(program, "uTime"),
      scale: gl.getUniformLocation(program, "uScale"),
      offset: gl.getUniformLocation(program, "uOffset"),
      pixelRatio: gl.getUniformLocation(program, "uPixelRatio"),
      mouse: gl.getUniformLocation(program, "uMouse"),
      mouseStrength: gl.getUniformLocation(program, "uMouseStrength"),
      parallax: gl.getUniformLocation(program, "uParallax"),
      intro: gl.getUniformLocation(program, "uIntro"),
      scroll: gl.getUniformLocation(program, "uScroll"),
    }

    gl.enable(gl.BLEND)
    gl.clearColor(0, 0, 0, 0)

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
    let width = 1
    let height = 1
    let aspect = 1
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width * dpr))
      height = Math.max(1, Math.floor(rect.height * dpr))
      aspect = width / height
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, width, height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Orientation: slow auto-spin + drag with inertia + cursor tilt.
    let yaw = 0.4
    let pitch = -0.18
    let yawVelocity = reducedMotion ? 0 : 0.035
    const baseVelocity = yawVelocity
    let tiltTarget = 0
    let tilt = 0
    let dragging = false
    let lastX = 0
    let lastY = 0

    // Cursor in NDC; the lens eases toward it so the stars glide rather than snap.
    const pointer = { x: 0, y: 0, inside: false }
    const lens = { x: 0, y: 0, strength: 0 }

    const onPointerDown = (e: PointerEvent) => {
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      canvas.setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width
      const ny = (e.clientY - rect.top) / rect.height
      pointer.inside = nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1 && e.pointerType !== "touch"
      pointer.x = nx * 2 - 1
      pointer.y = 1 - ny * 2
      tiltTarget = (ny - 0.5) * 0.25
      if (!dragging) return
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      lastX = e.clientX
      lastY = e.clientY
      yaw += dx * 0.006
      pitch = Math.max(-1.1, Math.min(1.1, pitch + dy * 0.004))
      yawVelocity = dx * 0.35
    }
    const onPointerUp = (e: PointerEvent) => {
      dragging = false
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId)
    }
    canvas.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("pointerup", onPointerUp)
    const onPointerLeave = () => {
      pointer.inside = false
    }
    document.documentElement.addEventListener("pointerleave", onPointerLeave)

    let visible = true
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    io.observe(canvas)

    let raf = 0
    let drawn = false
    const start = performance.now()
    let last = start

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      if (drawn && (!visible || document.hidden)) {
        last = now
        return
      }
      const dt = Math.min(now - last, 100) / 1000
      last = now

      if (!dragging) {
        yaw += yawVelocity * dt * (1 + (1 - Math.min(1, (now - start) / 2400)) * 4)
        yawVelocity += (baseVelocity - yawVelocity) * Math.min(1, dt * 1.6)
      }
      tilt += (tiltTarget - tilt) * Math.min(1, dt * 3)

      // Intro over ~2.4s (ease-out cubic); scroll progress over the hero's height.
      const t0 = Math.min(1, (now - start) / 2400)
      const intro = reducedMotion ? 1 : 1 - Math.pow(1 - t0, 3)
      const scroll = Math.min(1, Math.max(0, window.scrollY / Math.max(1, canvas.clientHeight)))

      const follow = Math.min(1, dt * 6)
      lens.x += (pointer.x - lens.x) * follow
      lens.y += (pointer.y - lens.y) * follow
      lens.strength += ((pointer.inside && !reducedMotion ? 1 : 0) - lens.strength) * Math.min(1, dt * 2.5)

      // Cluster sits right of the copy on wide screens, centred behind it on narrow ones.
      const wide = aspect > 1.15
      const time = reducedMotion ? 0 : (now - start) / 1000
      gl.clear(gl.COLOR_BUFFER_BIT)

      // Stars: additive light.
      gl.useProgram(program)
      gl.bindVertexArray(starVao)
      gl.blendFunc(gl.ONE, gl.ONE)
      gl.uniformMatrix3fv(u.rotation, false, rotation(yaw, pitch + tilt))
      gl.uniform1f(u.aspect, aspect)
      gl.uniform1f(u.time, time)
      gl.uniform1f(u.scale, wide ? 1.0 : 0.8)
      gl.uniform2f(u.offset, wide ? 0.24 : 0, wide ? 0 : 0.12)
      gl.uniform1f(u.pixelRatio, dpr)
      gl.uniform2f(u.mouse, lens.x, lens.y)
      gl.uniform1f(u.mouseStrength, lens.strength)
      gl.uniform2f(u.parallax, reducedMotion ? 0 : lens.x, reducedMotion ? 0 : lens.y)
      gl.uniform1f(u.intro, intro)
      gl.uniform1f(u.scroll, reducedMotion ? 0 : scroll)
      gl.drawArrays(gl.POINTS, 0, stars.count)

      // Clouds: premultiplied "over", so they veil the stars behind them.
      if (cloud && cu) {
        gl.useProgram(cloud)
        gl.bindVertexArray(cloudVao)
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
        gl.uniform2f(cu.resolution, width, height)
        gl.uniform1f(cu.time, time + 40)
        gl.uniform2f(cu.parallax, reducedMotion ? 0 : lens.x, reducedMotion ? 0 : lens.y)
        gl.uniform1f(cu.intro, intro)
        gl.uniform1f(cu.scroll, reducedMotion ? 0 : scroll)
        gl.drawArrays(gl.TRIANGLES, 0, 3)
      }
      gl.bindVertexArray(null)
      drawn = true
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      canvas.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      document.documentElement.removeEventListener("pointerleave", onPointerLeave)
      buffers.forEach((b) => gl.deleteBuffer(b))
      gl.deleteVertexArray(starVao)
      gl.deleteVertexArray(cloudVao)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      if (cloud) gl.deleteProgram(cloud)
      if (cvs) gl.deleteShader(cvs)
      if (cfs) gl.deleteShader(cfs)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ touchAction: "pan-y", cursor: "grab" }}
      aria-label="드래그해서 회전할 수 있는 별 무리"
      role="img"
    />
  )
}

export default Starfield
