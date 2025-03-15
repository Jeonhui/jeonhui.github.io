import { HeaderItems } from "@design-system/components/Header"
import { createElement } from "react"
import { BlogIcon, GithubIcon } from "@/assets/icons"
import { GITHUB, TISTORY } from "@/constants"

const headerItems: HeaderItems = {
  items: [
    {
      name: "resume",
      href: "/resume",
    },
    {
      name: "portfolio",
      href: "/portfolio",
    },
  ],
  iconNameItems: [
    {
      icon: createElement(GithubIcon),
      name: "github",
      href: GITHUB.USER_URL,
    },
    {
      icon: createElement(BlogIcon),
      name: "blog",
      href: TISTORY.USER_URL,
    },
  ],
}

export default headerItems
