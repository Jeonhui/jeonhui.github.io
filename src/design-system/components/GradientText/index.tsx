"use client"

import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import { Property } from "csstype"
import { useIsClient } from "@design/hooks"
import Color = Property.Color

type GradientTextProps = {
  children: React.ReactNode
  colors: Color[]
  deg?: number
  font?: keyof typeof styles.gradientTextFontVariants
  typography?: keyof typeof styles.gradientTextTypographyVariants
}

const GradientText = ({
  children,
  colors,
  deg,
  font = "base",
  typography = "body1",
  ...props
}: GradientTextProps) => {
  const isClient = useIsClient()

  const colorString = colors
    .map((color, index) => {
      return `${color} ${index * (100 / (colors.length - 1))}%`
    })
    .join(", ")

  return (
    <span
      style={{
        backgroundImage: `linear-gradient(${deg ?? 0}deg, ${colorString})`,
      }}
      className={clsx(
        styles.gradientText,
        {
          [styles.gradientTextVisible]: isClient,
        },
        styles.gradientTextFontVariants[font],
        styles.gradientTextTypographyVariants[typography],
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default GradientText
