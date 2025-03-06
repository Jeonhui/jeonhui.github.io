import { ReactNode } from "react"

type HeaderItem = {
  name: string
  href: string
}

type HeaderItems = {
  items: HeaderItem[]
  additionalItems?: ReactNode[]
}

export default HeaderItems
