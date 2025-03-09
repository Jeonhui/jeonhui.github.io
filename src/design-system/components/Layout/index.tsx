import React, { forwardRef, Ref } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type LayoutProps = {
  children: React.ReactNode
  hasHeaderPadding?: boolean
  alignment?: keyof typeof styles.layoutAlignmentVariants
}

const Layout = (
  {
    children,
    hasHeaderPadding = true,
    alignment = "columnTopLeft",
    ...props
  }: LayoutProps,
  ref: Ref<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={clsx(styles.layout, styles.layoutAlignmentVariants[alignment])}
      {...props}
      data-has-header-padding={hasHeaderPadding}
    >
      {children}
    </div>
  )
}

export default forwardRef(Layout)
