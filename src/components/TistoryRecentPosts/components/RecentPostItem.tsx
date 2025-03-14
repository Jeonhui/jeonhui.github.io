import { Container, Link, Text } from "@design-system/components"
import { PostItem } from "@/apis/tistory"
import { clsx } from "clsx"
import * as styles from "./recentPostItemStyles.css"
import { memo } from "react"

type RecentPostItemProps = {
  item?: PostItem
}

const RecentPostItem = ({ item }: RecentPostItemProps) => {
  return (
    <Link
      href={item?.link}
      className={clsx(styles.link)}
      color={"grayBorder"}
      size={"xSmall_full"}
    >
      <Container
        alignment={"columnTopLeft"}
        layout={"fullWidth"}
        padding={"xSmall"}
        gap={"xxSmall"}
      >
        <Text
          color={"inherit"}
          typography={"body6"}
          minWidth={"20%"}
          isLoading={!item}
        >
          {item && <strong>tistory - {item?.creator}</strong>}
        </Text>
        <Text
          color={"inherit"}
          typography={"body3"}
          minWidth={"60%"}
          isLoading={!item}
        >
          <strong>{item?.title}</strong>
        </Text>
        <Text
          color={"inherit"}
          typography={"body4"}
          minWidth={"100%"}
          isLoading={!item}
        >
          {item?.title}
        </Text>
        <Container
          className={styles.tagContainer}
          alignment={"rowCenterLeft"}
          layout={"fullWidth"}
          gap={"xSmall"}
        >
          {item?.categories.map((category, idx) => (
            <div key={idx} className={clsx(styles.tag)}>
              {category}
            </div>
          ))}
        </Container>
      </Container>
    </Link>
  )
}

export default memo(RecentPostItem)
