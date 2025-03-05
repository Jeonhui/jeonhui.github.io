import React, { ChangeEvent, HTMLInputTypeAttribute } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type InputProps = {
  leftChildren?: React.ReactNode
  rightChildren?: React.ReactNode
  type?: HTMLInputTypeAttribute
  placeholder?: string
  disabled?: boolean
  color?: keyof typeof styles.inputColorVariants
  size?: keyof typeof styles.inputSizeVariants
  value?: string
  onChange?: (value: string) => void
}

const Input = ({
  leftChildren,
  rightChildren,
  type = "text",
  placeholder,
  disabled,
  color = "default",
  size = "medium",
  value,
  onChange,
  ...props
}: InputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

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
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        {...props}
      />
      {rightChildren}
    </div>
  )
}

export default Input
