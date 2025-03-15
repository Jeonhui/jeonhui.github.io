import { HeaderItems } from "@design-system/components/Header"
import { createElement } from "react"
import { GithubIcon } from "@/assets"
import { GITHUB, TISTORY } from "@/constants"
import BlogIcon from "@/assets/BlogIcon"

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
