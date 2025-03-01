import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type ButtonProps = {
  color?: keyof typeof styles.buttonColorVariants
  children: React.ReactNode
}

const Button = ({ children, color = "default", ...props }: ButtonProps) => {
  return (
    <span
      className={clsx(styles.button, styles.buttonColorVariants[color])}
      {...props}
    >
      {children}
    </span>
  )
}

export default Button
