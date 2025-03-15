"use client"

import { useEffect, useState } from "react"
import { Container, Text } from "@design-system/components"
import PinnedRepository from "./components/PinnedItem"
import ItemContainer from "../ItemContainer"
import { useIsClient } from "@design-system/hooks"
import { getPinnedItems, PinnableItem } from "@/apis/github"
import { AnimatePresence, motion } from "framer-motion"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import { GithubIcon } from "@/assets/icons"

const GithubContent = ({}) => {
  const isClient = useIsClient()
  const [pinnedItem, setPinnedItem] = useState<PinnableItem[] | undefined>(
    undefined,
  )

  useEffect(() => {
    if (!isClient) return
    const fetchGithubPinnedItems = async () => {
      setPinnedItem(await getPinnedItems())
    }
    fetchGithubPinnedItems()
  }, [isClient])

  return (
    <ItemContainer title={"Github"} icon={<GithubIcon />}>
      {
        <Container
          className={styles.contentContainer}
          alignment={"rowTopLeft"}
          gap={"medium"}
          layout={"fullWidth"}
        >
          {isClient && (
            <AnimatePresence>
              {pinnedItem !== undefined && pinnedItem.length == 0 && (
                <motion.div
                  className={clsx(styles.errorAnimationContainer)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Container
                    className={clsx(styles.errorContainer)}
                    alignment={"columnCenter"}
                    layout={"fullWidth"}
                  >
                    <Text typography={"display6_bold"} color={"textDim2"}>
                      ERROR
                    </Text>
                    <Text typography={"header6"} color={"textDim2"}>
                      데이터를 불러오는 데 문제가 발생했어요. 😢
                    </Text>
                  </Container>
                </motion.div>
              )}

              {(pinnedItem === undefined || pinnedItem.length > 0) &&
                Array.from({ length: 6 }).map((_, idx) => (
                  <PinnedRepository key={idx} item={pinnedItem?.[idx]} />
                ))}
            </AnimatePresence>
          )}
        </Container>
      }
    </ItemContainer>
  )
}

export default GithubContent
