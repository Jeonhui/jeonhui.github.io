"use client"

import React, { useEffect, useRef, useState } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import HeaderItems from "./HeaderItems"
import Container from "../Container"
import ThemeToggleButton from "../ThemeToggleButton"
import Link from "../Link"
import GradientIconLink from "../GradientIconLink"
import { HamburgerMenuButton } from "./components"
import { theme } from "../../theme/theme.css"
import { LogoIconClipPath } from "../../assets/clipPath"

type HeaderProps = {
  items: HeaderItems
}

const Header = ({ items, ...props }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const headerContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      setIsOpen((prev) => {
        return !!(
          prev &&
          headerContainerRef.current &&
          headerContainerRef.current.contains(e.target as Node)
        )
      })
    }
    document.addEventListener("click", outSideClick)
  }, [])

  return (
    <Container
      ref={headerContainerRef}
      alignment={"columnCenter"}
      layout={"fullWidth"}
      className={clsx(styles.headerContainer)}
    >
      <Container
        alignment={"rowCenter"}
        layout={"fullWidth"}
        className={clsx(styles.header)}
        {...props}
      >
        <GradientIconLink
          clipPathId={"logoIconClipPath"}
          href={"/"}
          deg={120}
          colors={[theme.colors.text.text, theme.colors.primary]}
        >
          <LogoIconClipPath clipPathId={"logoIconClipPath"} />
        </GradientIconLink>

        <Container header-item={"true"} gap={"xSmall"} padding={"none"}>
          {items.items.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              size={"xSmall"}
              color={"text"}
              data-media-hidden-item={true}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggleButton data-media-hidden-item={true} size={"xSmall"} />
          <HamburgerMenuButton
            data-media-show-item={true}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </Container>
      </Container>
      <Container
        layout={"fullWidth"}
        alignment={"columnCenterLeft"}
        gap={"small"}
        header-menu-item={"true"}
        header-menu-item-open={isOpen.toString()}
      >
        {items.items.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            size={"xSmall_full"}
            color={"text"}
            alignment={"rowCenterLeft"}
            data-media-hidden-item={true}
          >
            {item.name}
          </Link>
        ))}
        <ThemeToggleButton size={"medium"} />
      </Container>
    </Container>
  )
}

export type { HeaderItems }
export default Header
