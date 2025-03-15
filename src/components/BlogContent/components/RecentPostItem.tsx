"use client"

import { Container, Link, Text } from "@design-system/components"
import { PostItem } from "@/apis/tistory"
import { clsx } from "clsx"
import * as styles from "./recentPostItemStyles.css"
import { motion } from "framer-motion"

type RecentPostItemProps = {
  idx?: number
  item?: PostItem
}

const RecentPostItem = ({ idx, item }: RecentPostItemProps) => {
  return (
    <motion.div
      key={`recent-post-item-${idx}`}
      className={clsx(styles.animationContainer)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
            isLoading={item == undefined}
          >
            {item && <strong>tistory - {item?.creator}</strong>}
          </Text>
          <Text
            color={"inherit"}
            typography={"body3"}
            minWidth={"60%"}
            isLoading={item == undefined}
          >
            <strong>{item?.title}</strong>
          </Text>
          <Text
            color={"inherit"}
            typography={"body4"}
            minWidth={"100%"}
            lineClamp={1}
            isLoading={item == undefined}
          >
            {item?.contentSnippet}
          </Text>

          <Container
            className={styles.tagContainer}
            alignment={"rowCenterLeft"}
            layout={"fullWidth"}
            gap={"xSmall"}
          >
            {item?.categories.map((category, idx) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                key={idx}
                className={clsx(styles.tag)}
              >
                {category}
              </motion.div>
            ))}
          </Container>
        </Container>
      </Link>
    </motion.div>
  )
}

export default RecentPostItem
