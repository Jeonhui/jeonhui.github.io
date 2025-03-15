"use client"

import { useEffect, useState } from "react"
import { getRecentPosts, PostItem } from "@/apis/tistory"
import { Container, Text } from "@design-system/components"
import RecentPostItem from "./components/RecentPostItem"
import ItemContainer from "../ItemContainer"
import { useIsClient } from "@design-system/hooks"
import { AnimatePresence, motion } from "framer-motion"
import { clsx } from "clsx"
import * as styles from "./styles.css"
import { BlogIcon } from "@/assets/icons"

const BlogContent = ({}) => {
  const isClient = useIsClient()
  const [recentPosts, setRecentPosts] = useState<PostItem[] | undefined>(
    undefined,
  )

  useEffect(() => {
    if (!isClient) return
    const fetchTistoryRecentPosts = async () => {
      setRecentPosts(await getRecentPosts())
    }
    fetchTistoryRecentPosts()
  }, [isClient])

  return (
    <ItemContainer title={"Blog"} icon={<BlogIcon />}>
      {
        <Container
          minHeight={"24rem"}
          alignment={"columnTopLeft"}
          gap={"medium"}
          layout={"fullWidth"}
        >
          {isClient && (
            <AnimatePresence>
              {recentPosts !== undefined && recentPosts.length == 0 && (
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
              {(recentPosts === undefined || recentPosts.length > 0) &&
                Array.from({ length: 3 }).map((_, idx) => (
                  <RecentPostItem
                    key={idx}
                    idx={idx}
                    item={recentPosts?.[idx]}
                  />
                ))}
            </AnimatePresence>
          )}
        </Container>
      }
    </ItemContainer>
  )
}

export default BlogContent
