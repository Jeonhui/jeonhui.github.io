import { Container, Text } from "@design-system/components"
import { ReactElement, ReactNode } from "react"
import { clsx } from "clsx"
import * as styles from "./styles.css"

type ItemContainerProps = {
  title: string
  icon?: ReactElement
  hasMarginTop?: boolean
  titleSize?: "xSmall" | "small" | "medium" | "large"
  children: ReactNode
}

const ItemContainer = ({
  title,
  icon,
  titleSize = "medium",
  hasMarginTop = true,
  children,
}: ItemContainerProps) => {
  return (
    <Container
      className={clsx({ [styles.itemContainerMarginTop]: hasMarginTop })}
      alignment={"columnTopLeft"}
      layout={"fullWidth"}
      gap={"small"}
    >
      <Container
        alignment={"rowCenterLeft"}
        className={clsx(
          styles.itemTitle,
          styles.itemTitleSizeVariants[titleSize],
        )}
        gap={"xSmall"}
      >
        {icon}
        <Text
          typography={
            titleSize === "large"
              ? "header4_bold"
              : titleSize === "medium"
                ? "header5_bold"
                : titleSize === "small"
                  ? "header6_bold"
                  : "body3"
          }
          color={"textDim"}
        >
          {title}
        </Text>
      </Container>
      {children}
    </Container>
  )
}

export default ItemContainer
