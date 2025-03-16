import { ContactItem } from "@/components"
import { createElement } from "react"
import { INFO } from "@/constants"
import { MailIcon } from "@/assets/icons"

type ContactItems = {
  gmail: ContactItem
}
const contactItems: ContactItems = {
  gmail: {
    icon: createElement(MailIcon),
    name: INFO.EMAIL,
    contact: `mailto:${INFO.EMAIL}`,
  },
}

export default contactItems
