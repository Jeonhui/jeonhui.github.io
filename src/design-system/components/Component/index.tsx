import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type ComponentProps = {
  children: React.ReactNode
}

const Component = ({ children, ...props }: ComponentProps) => {
  return (
    <div className={clsx(styles.components)} {...props}>
      {children}
    </div>
  )
}

export default Component
