"use client"

import React, { JSX } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import Header, { HeaderItems } from "../Header"

type MainLayoutProps = {
  headerItems: HeaderItems
  children: JSX.Element
}

const MainLayout = ({ children, headerItems, ...props }: MainLayoutProps) => {
  // const [scrollY, setScrollY] = useState(0)
  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY)
  //   }
  //
  //   window.addEventListener("scroll", handleScroll)
  //
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  return (
    <div className={clsx(styles.mainLayout)} {...props}>
      <Header items={headerItems} />
      {children}
    </div>
  )
}

export type { HeaderItems }
export default MainLayout
