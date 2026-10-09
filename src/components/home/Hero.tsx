"use client"

import { useCallback, useRef, useState } from "react"
import { motion } from "framer-motion"
import { PROFILE } from "@/data"
import Starfield, { StarfieldStats } from "./starfield/Starfield"

const enter = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] },
})

const Hero = () => {
  const readoutRef = useRef<HTMLSpanElement>(null)
  const [supported, setSupported] = useState(true)

  // Written straight to the DOM so the readout never re-renders React at frame rate.
  const onStats = useCallback((s: StarfieldStats) => {
    if (!readoutRef.current) return
    const orientation = window.innerWidth >= 640 ? ` · yaw ${s.yaw.toFixed(0).padStart(3, "0")}° · pitch ${s.pitch.toFixed(0)}°` : ""
    readoutRef.current.textContent = `${s.stars.toLocaleString()} stars${orientation} · ${s.fps} fps`
  }, [])

  return (
    <section className="relative isolate -mt-[var(--header-height)] flex min-h-[100svh] flex-col overflow-hidden">
      {/* One bloom behind the cluster */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{ background: "radial-gradient(45% 55% at 70% 50%, var(--color-bloom), transparent 72%)" }}
      />
      {supported && (
        <motion.div {...enter(0)} className="absolute inset-0 -z-10">
          <Starfield className="h-full w-full" onStats={onStats} onUnsupported={() => setSupported(false)} />
        </motion.div>
      )}

      {/* Soft scrim keeps the name and line readable over field stars */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "radial-gradient(55% 50% at 12% 78%, color-mix(in oklch, var(--color-paper) 70%, transparent), transparent 75%)",
        }}
      />

      <div className="pointer-events-none relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-end px-5 pb-10 pt-[calc(var(--header-height)+var(--space-3xl))] sm:px-8 sm:pb-12">
        <motion.h1
          {...enter(0.2)}
          className="min-w-0 text-[clamp(3.5rem,13vw,10.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-[var(--color-ink)] [overflow-wrap:anywhere]"
        >
          Jeonhui
          <br />
          <span className="text-[var(--color-ink-2)]">Lee</span>
        </motion.h1>

        <motion.p
          {...enter(0.45)}
          className="mt-[var(--space-lg)] max-w-[36ch] text-lg leading-relaxed text-[var(--color-ink-2)] sm:text-xl"
        >
          {PROFILE.lead}
        </motion.p>

        <motion.div
          {...enter(0.6)}
          className="mt-[var(--space-2xl)] flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-faint)]"
        >
          <span ref={readoutRef} className="whitespace-nowrap tabular-nums">
            {supported ? "plummer sphere · webgl2" : ""}
          </span>
          <span className="hidden sm:inline">drag to rotate</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
