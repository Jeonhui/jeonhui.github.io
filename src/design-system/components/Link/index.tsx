"use client"

import React, { forwardRef, Ref } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type LinkProps = {
  children: React.ReactNode
  className?: string
  href?: string
  alignment?: keyof typeof styles.linkAlignmentVariants
  color?: keyof typeof styles.linkColorVariants
  size?: keyof typeof styles.linkSizeVariants
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: () => void
}

const Link = (
  {
    children,
    className,
    href,
    leftIcon,
    rightIcon,
    alignment = "rowCenter",
    color = "default",
    size = "medium",
    onClick,
    ...props
  }: LinkProps,
  ref: Ref<HTMLAnchorElement>,
) => {
  const onClickHandler = () => {
    console.log("Link clicked", onClick)
    onClick?.()
  }

  return (
    <a
      ref={ref}
      href={href}
      className={clsx(
        className,
        styles.link,
        styles.linkAlignmentVariants[alignment],
        styles.linkColorVariants[color],
        styles.linkSizeVariants[size],
      )}
      onClick={onClickHandler}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  )
}

export default forwardRef(Link)
