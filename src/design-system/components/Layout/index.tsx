import React, { forwardRef, Ref } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type LayoutProps = {
  children: React.ReactNode
  leftSidebar?: React.ReactNode
  rightSidebar?: React.ReactNode
  scrollSnapMandatory?: boolean
  alignment?: keyof typeof styles.layoutContentAlignmentVariants
  gap?: keyof typeof styles.layoutContentGapVariants
}

const Layout = (
  {
    children,
    leftSidebar,
    rightSidebar,
    scrollSnapMandatory = true,
    gap = "medium",
    alignment = "columnTopCenter",
    ...props
  }: LayoutProps,
  ref: Ref<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={clsx("layout", styles.layout)}
      {...props}
      data-scroll-snap-mandatory={scrollSnapMandatory}
    >
      <div className={clsx(styles.forScrollbar)} />
      <div className={clsx("leftSideBar", styles.sidebar)}>{leftSidebar}</div>
      <div
        className={clsx(
          "layoutContent",
          styles.layoutContent,
          styles.layoutContentAlignmentVariants[alignment],
          styles.layoutContentGapVariants[gap],
        )}
      >
        {children}
      </div>
      <div className={clsx("rightSideBar", styles.sidebar)}>{rightSidebar}</div>
    </div>
  )
}

export default forwardRef(Layout)
