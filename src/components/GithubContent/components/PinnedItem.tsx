"use client"

import { Container, Link, Text } from "@design-system/components"
import { clsx } from "clsx"
import * as styles from "./pinnedItemStyle.css"
import { motion } from "framer-motion"
import { PinnableItem } from "@/apis/github"
import { StarIcon } from "@/assets/icons"

type PinnedItemProps = {
  idx?: number
  item?: PinnableItem
}

const PinnedItem = ({ idx, item }: PinnedItemProps) => {
  return (
    <motion.div
      key={`recent-post-item-${idx}`}
      className={clsx(styles.animationContainer)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link
        href={item?.url}
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
          {/*<Text*/}
          {/*  color={"inherit"}*/}
          {/*  typography={"body6"}*/}
          {/*  minWidth={"20%"}*/}
          {/*  isLoading={item == undefined}*/}
          {/*>*/}
          {/*  {item && <strong>tistory - {item}</strong>}*/}
          {/*</Text>*/}
          <Text
            color={"inherit"}
            typography={"body3"}
            minWidth={"60%"}
            isLoading={item == undefined}
          >
            <strong>{item?.name}</strong>
          </Text>
          <Text
            color={"inherit"}
            typography={"body4"}
            minWidth={"100%"}
            lineClamp={1}
            isLoading={item == undefined}
          >
            {item?.description}
          </Text>

          <Container
            className={styles.tagContainer}
            alignment={"rowCenterLeft"}
            layout={"fullWidth"}
            gap={"xSmall"}
          >
            {item && (
              <>
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  style={{ color: item.primaryLanguage.color }}
                  className={clsx(styles.tag)}
                >
                  {item.primaryLanguage.name}
                </motion.div>
                <motion.div
                  key={item.stargazerCount}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className={clsx(styles.tag)}
                >
                  <StarIcon fill={"white"} />
                  {item.stargazerCount}
                </motion.div>
              </>
            )}
          </Container>
        </Container>
      </Link>
    </motion.div>
  )
}

export default PinnedItem
