"use client"

import { useEffect, useRef } from "react"

const LINES = [
  { text: "Jeonhui", tone: "text-[var(--color-ink)]" },
  { text: "Lee", tone: "text-[var(--color-ink-2)]" },
]

const BASE = 600
const PEAK = 880
const RADIUS = 220

// The name settles into weight on load (CSS keyframes), then letters near the cursor
// swell along Pretendard's variable weight axis. Text is visible from the first paint.
const HeroName = () => {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const letters = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-letter]"))
    let pointer: { x: number; y: number } | null = null
    let raf = 0

    const render = () => {
      raf = 0
      for (const letter of letters) {
        let weight = BASE
        if (pointer) {
          const r = letter.getBoundingClientRect()
          const d = Math.hypot(pointer.x - (r.left + r.width / 2), pointer.y - (r.top + r.height / 2))
          const t = Math.max(0, 1 - d / RADIUS)
          weight = BASE + (PEAK - BASE) * t * t * (3 - 2 * t)
        }
        letter.style.fontWeight = String(Math.round(weight))
      }
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render)
    }
    const onMove = (e: PointerEvent) => {
      pointer = { x: e.clientX, y: e.clientY }
      schedule()
    }
    const onLeave = () => {
      pointer = null
      schedule()
    }

    // Wait for the entrance keyframes to finish before taking over the weight.
    const timer = window.setTimeout(() => {
      letters.forEach((l) => {
        l.style.animation = "none"
        l.style.transition = "font-weight 260ms cubic-bezier(0.16, 1, 0.3, 1)"
      })
      window.addEventListener("pointermove", onMove, { passive: true })
      document.documentElement.addEventListener("pointerleave", onLeave)
      render()
    }, 1500)

    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  let index = 0
  return (
    <h1
      ref={ref}
      aria-label="Jeonhui Lee"
      className="min-w-0 text-[clamp(3.5rem,13vw,10.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] [overflow-wrap:anywhere]"
    >
      {LINES.map((line) => (
        <span key={line.text} aria-hidden className={`block ${line.tone}`}>
          {Array.from(line.text).map((ch) => {
            const i = index++
            return (
              <span
                key={i}
                data-letter
                className="hero-letter inline-block"
                style={{ animationDelay: `${120 + i * 45}ms` }}
              >
                {ch}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export default HeroName
