"use client"

import { useEffect, useState } from "react"
import { getRecentPosts, PostItem } from "@/apis/tistory"
import { Container } from "@design-system/components"
import RecentPostItem from "./components/RecentPostItem"
import ItemContainer from "../ItemContainer"
import { useIsClient } from "@design-system/hooks"

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
    <ItemContainer title={"Blog"}>
      {
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
      }
    </ItemContainer>
  )
}

export default BlogContent
