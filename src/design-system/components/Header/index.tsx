import React from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import { LogoIcon } from "../../assets/icon"
import HeaderItems from "./HeaderItems"
import Container from "../Container"
import Button from "../Button"
import { useRouter } from "next/navigation"

type HeaderProps = {
  items: HeaderItems
}

const Header = ({ items, ...props }: HeaderProps) => {
  const router = useRouter()

  const onClickHandler = (href: string) => {
    router.push(href)
  }

  return (
    <div className={clsx(styles.header)} {...props}>
      <LogoIcon />
      <Container header-item={"true"} gap={"xSmall"}>
        {items.items.map((item, idx) => (
          <Button
            key={idx}
            size={"xSmall"}
            color={"text"}
            onClick={() => onClickHandler(item.href)}
          >
            {item.name}
          </Button>
        ))}
      </Container>
    </div>
  )
}

export type { HeaderItems }
export default Header
