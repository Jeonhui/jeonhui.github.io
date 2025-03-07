"use client"

import React from "react"
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

const Link = ({
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
}: LinkProps) => {
  const onClickHandler = () => {
    onClick?.()
  }

  return (
    <a
      href={href}
      className={clsx(
        className,
        styles.link,
        styles.linkAlignmentVariants[alignment],
        styles.linkColorVariants[color],
        styles.linkSizeVariants[size],
      )}
      {...props}
      onClick={onClickHandler}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  )
}

export type { LinkProps }
export default Link
