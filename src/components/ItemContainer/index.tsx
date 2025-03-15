import { Container, Text } from "@design-system/components"
import { ReactNode } from "react"

type ItemContainerProps = {
  title: string
  children: ReactNode
}

const ItemContainer = ({ title, children }: ItemContainerProps) => {
  return (
    <Container alignment={"columnTopLeft"} layout={"fullWidth"} gap={"small"}>
      <Container alignment={"rowTopLeft"}>
        <Text typography={"header5_bold"} color={"textDim"}>
          {title}
        </Text>
      </Container>
      {children}
    </Container>
  )
}

export default ItemContainer
