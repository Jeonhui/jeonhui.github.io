"use client"

import React from "react"
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion"

// Only the animation features the site uses are loaded (LazyMotion + `m` components),
// and transform/layout motion is dropped automatically for prefers-reduced-motion users.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
