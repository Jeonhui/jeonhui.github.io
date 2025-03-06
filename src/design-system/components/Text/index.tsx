import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type TextProps = {
  children: React.ReactNode
  color?: keyof typeof styles.textColorVariants
  font?: keyof typeof styles.textFontVariants
  typography?: keyof typeof styles.textTypographyVariants
}

const Text = ({
  children,
  color = "text",
  font = "base",
  typography = "body1",
  ...props
}: TextProps) => {
  return (
    <span
      className={clsx(
        styles.text,
        styles.textColorVariants[color],
        styles.textFontVariants[font],
        styles.textTypographyVariants[typography],
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Text
