import React, { forwardRef, Ref } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type SectionProps = {
  children: React.ReactNode
  animate?: boolean
  isTopSection?: boolean
  alignment?: keyof typeof styles.sectionAlignmentVariants
  gap?: keyof typeof styles.sectionGapVariants
  verticalPadding?: keyof typeof styles.sectionVerticalPaddingVariants
  horizontalPadding?: keyof typeof styles.sectionHorizontalPaddingVariants
}

const Section = (
  {
    children,
    animate = true,
    isTopSection = false,
    alignment = "columnTopLeft",
    gap = "medium",
    verticalPadding = "medium",
    horizontalPadding = "large",
    ...props
  }: SectionProps,
  ref: Ref<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={clsx(
        styles.section,
        styles.sectionGapVariants[gap],
        styles.sectionAlignmentVariants[alignment],
        styles.sectionVerticalPaddingVariants[verticalPadding],
        styles.sectionHorizontalPaddingVariants[horizontalPadding],
      )}
      {...props}
      data-animate={animate}
      data-is-top-section={isTopSection}
    >
      {children}
    </div>
  )
}

export default forwardRef(Section)
