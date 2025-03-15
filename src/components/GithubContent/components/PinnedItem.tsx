"use client"

import { Container, Link, Text } from "@design-system/components"
import { clsx } from "clsx"
import * as styles from "./pinnedItemStyle.css"
import { motion } from "framer-motion"
import { PinnableItem } from "@/apis/github"
import { StarIcon } from "@/assets/icons"
import { useEffect, useState } from "react"
import { useIsClient } from "@design-system/hooks"

type PinnedItemProps = {
  idx?: number
  item?: PinnableItem
}

const PinnedItem = ({ idx, item }: PinnedItemProps) => {
  const isClient = useIsClient()
  const [primaryLanguageColor, setPrimaryLanguageColor] =
    useState<keyof typeof styles.primaryLanguageColors>("red")

  useEffect(() => {
    if (!isClient || !item) return
    const language = item.primaryLanguage.name.toLowerCase()
    switch (language) {
      case "swift":
        setPrimaryLanguageColor("red")
        break
      case "python":
        setPrimaryLanguageColor("blue")
        break
      case "java":
        setPrimaryLanguageColor("green")
        break
      default:
        setPrimaryLanguageColor("red")
    }
  }, [isClient, item, item?.primaryLanguage])

  if (!isClient) return null

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
        className={clsx(
          styles.link,
          styles.primaryLanguageColorVariants[primaryLanguageColor],
        )}
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
                  className={clsx(
                    styles.tag,
                    `github-content-primary-language-${primaryLanguageColor}`,
                  )}
                >
                  {item.primaryLanguage.name}
                </motion.div>
                <motion.div
                  key={item.stargazerCount}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className={clsx(styles.tag, styles.star)}
                >
                  <StarIcon />
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
