"use client"

import { useEffect, useState } from "react"
import { getRecentPosts, PostItem } from "@/apis/tistory"
import { Container, Text } from "@design-system/components"
import RecentPostItem from "./components/RecentPostItem"

const TistoryRecentPosts = ({}) => {
  const [recentPosts, setRecentPosts] = useState<PostItem[] | null>(null)

  useEffect(() => {
    const fetchTistoryRecentPosts = async () => {
      setRecentPosts(await getRecentPosts())
    }
    fetchTistoryRecentPosts()
  }, [])

  return (
    <Container alignment={"columnTopLeft"} layout={"fullWidth"} gap={"small"}>
      <Container alignment={"rowTopLeft"}>
        <Text typography={"header6_bold"} color={"textDim"}>
          Blog
        </Text>
      </Container>
      <Container
        alignment={"columnTopLeft"}
        gap={"medium"}
        layout={"fullWidth"}
      >
        {Array.from({ length: 3 }).map((_, idx) => (
          <RecentPostItem key={idx} item={recentPosts?.[idx]} />
        ))}
      </Container>
    </Container>
  )
}

export default TistoryRecentPosts
