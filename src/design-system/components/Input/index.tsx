import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type InputProps = {
  leftChildren?: React.ReactNode
  rightChildren?: React.ReactNode
  placeholder?: string
  disabled?: boolean
  color?: keyof typeof styles.inputColorVariants
  size?: keyof typeof styles.inputSizeVariants
}

const Input = ({
  leftChildren,
  rightChildren,
  placeholder,
  disabled,
  color = "default",
  size = "medium",
  ...props
}: InputProps) => {
  return (
    <div
      className={clsx(
        styles.input,
        styles.inputColorVariants[color],
        styles.inputSizeVariants[size],
      )}
      data-disabled={disabled}
    >
      {leftChildren}
      <input placeholder={placeholder} disabled={disabled} {...props} />
      {rightChildren}
    </div>
  )
}

export default Input
