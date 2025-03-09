"use client"

import React, { forwardRef, Ref, RefObject, useEffect, useRef } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import { motion, useAnimation, useInView } from "framer-motion"

type SectionProps = {
  id?: string
  children: React.ReactNode
  animate?: boolean
  hasHeaderPadding?: boolean
  alignment?: keyof typeof styles.sectionAlignmentVariants
  gap?: keyof typeof styles.sectionGapVariants
  verticalPadding?: keyof typeof styles.sectionVerticalPaddingVariants
  horizontalPadding?: keyof typeof styles.sectionHorizontalPaddingVariants
}

const Section = (
  {
    id,
    children,
    animate = true,
    hasHeaderPadding = true,
    alignment = "columnTopLeft",
    gap = "medium",
    verticalPadding = "medium",
    horizontalPadding = "none",
    ...props
  }: SectionProps,
  ref: Ref<HTMLDivElement>,
) => {
  const viewRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(viewRef, { once: true, amount: 0.8 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls, viewRef])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      id={id}
      ref={(node) => {
        if (typeof ref === "function") ref(node)
        else if (ref) (ref as RefObject<HTMLDivElement | null>).current = node
        viewRef.current = node
      }}
      animate={mainControls}
      variants={containerVariants}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.3 }}
      className={clsx(
        styles.section,
        styles.sectionGapVariants[gap],
        styles.sectionAlignmentVariants[alignment],
        styles.sectionVerticalPaddingVariants[verticalPadding],
        styles.sectionHorizontalPaddingVariants[horizontalPadding],
      )}
      {...props}
      data-animate={animate}
      data-has-header-padding={hasHeaderPadding}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default forwardRef(Section)
