"use client"

import { useState } from "react"
import NextLink from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { motion } from "framer-motion"
import { PROFILE } from "@/data"
import Starfield from "./starfield/Starfield"

const enter = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] },
})

const Hero = () => {
  const [supported, setSupported] = useState(true)

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
          <Starfield className="h-full w-full" onUnsupported={() => setSupported(false)} />
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

      <div className="pointer-events-none relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-end px-5 pb-[var(--space-2xl)] pt-[calc(var(--header-height)+var(--space-3xl))] sm:px-8 sm:pb-[var(--space-3xl)]">
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

        <motion.div {...enter(0.6)} className="pointer-events-auto mt-[var(--space-lg)]">
          <NextLink
            href="/portfolio"
            className="group inline-flex items-center gap-2 whitespace-nowrap text-[15px] text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-[6px] transition-colors duration-[var(--dur-short)] hover:decoration-[var(--color-ink)]"
          >
            포트폴리오 보기
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-[var(--dur-short)] group-hover:translate-x-0.5" />
          </NextLink>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
