import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className={clsx(styles.mainLayout)}>{children}</div>
}

export default MainLayout
