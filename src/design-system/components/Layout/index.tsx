import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={clsx(styles.layout)} {...props}>
      {children}
    </div>
  )
}

export default Layout
