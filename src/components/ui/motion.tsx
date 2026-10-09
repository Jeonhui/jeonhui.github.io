"use client"

import { ReactNode } from "react"
import { m, useReducedMotion } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1] as const

/** Text slides up through a mask the first time it enters the viewport. */
export const MaskText = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const reduce = useReducedMotion()
  if (reduce) return <>{children}</>
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <m.span
        className="block"
        initial={{ y: "105%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </m.span>
    </span>
  )
}

/** A figure opens from a slightly inset frame while its content settles from a light zoom. */
export const ClipReveal = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const reduce = useReducedMotion()
  if (reduce) return <figure className={className}>{children}</figure>
  return (
    <m.figure
      className={className}
      initial={{ clipPath: "inset(10% 6% 10% 6% round 10px)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <m.div
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        {children}
      </m.div>
    </m.figure>
  )
}
