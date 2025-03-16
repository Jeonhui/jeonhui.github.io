"use client"

import { Container, Link } from "@design-system/components"
import ItemContainer from "../ItemContainer"
import { ReactElement } from "react"
import { useIsClient } from "@design-system/hooks"

type ContactItem = {
  icon: ReactElement
  name: string
  contact: string
}

type ContactContentProps = {
  contactItems: ContactItem[]
}

const ContactContent = ({ contactItems }: ContactContentProps) => {
  const isClient = useIsClient()
  return (
    <ItemContainer title={"Contact"} titleSize={"small"}>
      {isClient && (
        <Container
          alignment={"columnTopLeft"}
          gap={"small"}
          layout={"fullWidth"}
        >
          <Container
            alignment={"rowTopLeft"}
            gap={"small"}
            layout={"fullWidth"}
          >
            {contactItems.map((item, idx) => (
              <Link
                key={idx}
                color={"text"}
                leftIcon={item.icon}
                href={item.contact}
                size={"xSmall"}
              >
                {item.name}
              </Link>
            ))}
          </Container>
        </Container>
      )}
    </ItemContainer>
  )
}

export type { ContactItem }
export default ContactContent
