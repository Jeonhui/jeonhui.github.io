import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type LayoutProps = {
  children: React.ReactNode
  alignment?: keyof typeof styles.layoutAlignmentVariants
  gap?: keyof typeof styles.layoutGapVariants
  verticalPadding?: keyof typeof styles.layoutVerticalPaddingVariants
  horizontalPadding?: keyof typeof styles.layoutHorizontalPaddingVariants
}

const Layout = ({
  children,
  alignment = "columnTopLeft",
  gap = "medium",
  verticalPadding = "xLarge",
  horizontalPadding = "medium",
  ...props
}: LayoutProps) => {
  return (
    <div
      className={clsx(
        styles.layout,
        styles.layoutGapVariants[gap],
        styles.layoutAlignmentVariants[alignment],
        styles.layoutVerticalPaddingVariants[verticalPadding],
        styles.layoutHorizontalPaddingVariants[horizontalPadding],
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Layout
