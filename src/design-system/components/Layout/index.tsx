import React, { forwardRef, Ref } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type LayoutProps = {
  children: React.ReactNode
  animate?: boolean
  hasHeaderPadding?: boolean
  alignment?: keyof typeof styles.layoutAlignmentVariants
  gap?: keyof typeof styles.layoutGapVariants
  verticalPadding?: keyof typeof styles.layoutVerticalPaddingVariants
  horizontalPadding?: keyof typeof styles.layoutHorizontalPaddingVariants
}

const Layout = (
  {
    children,
    animate = true,
    hasHeaderPadding = true,
    alignment = "columnTopLeft",
    gap = "medium",
    verticalPadding = "medium",
    horizontalPadding = "large",
    ...props
  }: LayoutProps,
  ref: Ref<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.layout,
        styles.layoutGapVariants[gap],
        styles.layoutAlignmentVariants[alignment],
        styles.layoutVerticalPaddingVariants[verticalPadding],
        styles.layoutHorizontalPaddingVariants[horizontalPadding],
      )}
      {...props}
      data-animate={animate}
      data-has-header-padding={hasHeaderPadding}
    >
      {children}
    </div>
  )
}

export default forwardRef(Layout)
