import React, { forwardRef, Ref } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import { Property } from "csstype"
import Width = Property.Width
import WhiteSpace = Property.WhiteSpace

type TextProps = {
  children: React.ReactNode
  minWidth?: Width
  isLoading?: boolean
  whiteSpace?: WhiteSpace
  lineClamp?: number
  color?: keyof typeof styles.textColorVariants
  font?: keyof typeof styles.textFontVariants
  typography?: keyof typeof styles.textTypographyVariants
}

const Text = (
  {
    children,
    minWidth,
    whiteSpace = "pre-wrap",
    lineClamp,
    isLoading = false,
    color = "text",
    font = "base",
    typography = "body1",
    ...props
  }: TextProps,
  ref: Ref<HTMLSpanElement>,
) => {
  return (
    <span
      ref={ref}
      style={{
        minWidth: minWidth,
        whiteSpace: whiteSpace,
        ...(lineClamp
          ? {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              lineClamp: lineClamp,
              WebkitLineClamp: lineClamp,
              WebkitBoxOrient: "vertical",
            }
          : {}),
      }}
      className={clsx(
        styles.text,
        styles.textColorVariants[color],
        styles.textFontVariants[font],
        styles.textTypographyVariants[typography],
        {
          [styles.skeleton]: isLoading,
        },
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export type { TextProps }
export default forwardRef(Text)
