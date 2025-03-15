import { Container, Text } from "@design-system/components"
import { ReactNode } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type ItemContainerProps = {
  title: string
  children: ReactNode
}

const ItemContainer = ({ title, children }: ItemContainerProps) => {
  return (
    <Container
      className={clsx(styles.itemContainer)}
      alignment={"columnTopLeft"}
      layout={"fullWidth"}
      gap={"small"}
    >
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
