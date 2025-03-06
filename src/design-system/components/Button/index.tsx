import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type ButtonProps = {
  children: React.ReactNode
  color?: keyof typeof styles.buttonColorVariants
  size?: keyof typeof styles.buttonSizeVariants
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: () => void
}

const Button = ({
  children,
  leftIcon,
  rightIcon,
  color = "default",
  size = "medium",
  onClick,
  ...props
}: ButtonProps) => {
  const onClickHandler = () => {
    onClick?.()
  }

  return (
    <button
      className={clsx(
        styles.button,
        styles.buttonColorVariants[color],
        styles.buttonSizeVariants[size],
      )}
      {...props}
      onClick={onClickHandler}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}

export default Button
