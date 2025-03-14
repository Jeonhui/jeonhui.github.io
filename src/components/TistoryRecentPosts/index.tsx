"use client"

import { useEffect, useState } from "react"
import { getRecentPosts, PostItem } from "@/apis/tistory"
import { Container } from "@design-system/components"
import RecentPostItem from "./components/RecentPostItem"
import ItemContainer from "@/components/ItemContainer"
import { useIsClient } from "@design-system/hooks"

const TistoryRecentPosts = ({}) => {
  const isClient = useIsClient()
  const [recentPosts, setRecentPosts] = useState<PostItem[] | null>(null)

  useEffect(() => {
    if (!isClient) return
    const fetchTistoryRecentPosts = async () => {
      setRecentPosts(await getRecentPosts())
    }
    fetchTistoryRecentPosts()
  }, [isClient])

  return (
    <ItemContainer title={"Blog"}>
      {isClient && (
        <Container
          minHeight={"24rem"}
          alignment={"columnTopLeft"}
          gap={"medium"}
          layout={"fullWidth"}
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <RecentPostItem key={idx} item={recentPosts?.[idx]} />
          ))}
        </Container>
      )}
    </ItemContainer>
  )
}

export default TistoryRecentPosts
