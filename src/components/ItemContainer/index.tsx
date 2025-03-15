import { Container, Text } from "@design-system/components"
import { ReactNode } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type ItemContainerProps = {
  title: string
  titleSize?: "small" | "medium" | "large"
  children: ReactNode
}

const ItemContainer = ({
  title,
  titleSize = "medium",
  children,
}: ItemContainerProps) => {
  return (
    <Container
      className={clsx(styles.itemContainer)}
      alignment={"columnTopLeft"}
      layout={"fullWidth"}
      gap={"small"}
    >
      <Container alignment={"rowTopLeft"}>
        {titleSize === "large" ? (
          <Text typography={"header4_bold"} color={"textDim"}>
            {title}
          </Text>
        ) : titleSize === "medium" ? (
          <Text typography={"header5_bold"} color={"textDim"}>
            {title}
          </Text>
        ) : (
          <Text typography={"header6_bold"} color={"textDim"}>
            {title}
          </Text>
        )}
      </Container>
      {children}
    </Container>
  )
}

export default ItemContainer
