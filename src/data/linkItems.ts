import { LinkItem } from "@/components"
import { createElement } from "react"
import { BlogIcon, GithubIcon } from "@/assets/icons"
import { GITHUB, TISTORY } from "@/constants"

const linkItems: LinkItem[] = [
  {
    icon: createElement(GithubIcon),
    name: "github",
    href: GITHUB.USER_URL,
  },
  {
    icon: createElement(BlogIcon),
    name: "tistory",
    href: TISTORY.USER_URL,
  },
]

export default linkItems
