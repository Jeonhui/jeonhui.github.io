"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { clsx } from "clsx"
import { Container, Text } from "@design-system/components"
import PinnedRepository from "./PinnedItem"
import ItemContainer from "../../ItemContainer"
import { useIsClient } from "@design-system/hooks"
import { getPinnedItems, PinnableItem } from "@/apis/github"
import * as commonStyles from "./commonStyles.css"

const PinnedItemContainer = ({}) => {
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
    <ItemContainer title={"Pinned"} titleSize={"xSmall"} hasMarginTop={false}>
      {
        <Container
          className={commonStyles.pinnedItemContainer}
          alignment={"rowTopLeft"}
          gap={"medium"}
          layout={"fullWidth"}
        >
          {isClient && (
            <AnimatePresence>
              {pinnedItem !== undefined && pinnedItem.length == 0 && (
                <motion.div
                  className={clsx(commonStyles.errorAnimationContainer)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Container
                    className={clsx(commonStyles.errorContainer)}
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

export default PinnedItemContainer
