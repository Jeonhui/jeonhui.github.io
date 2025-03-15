"use client"

import { useEffect, useState } from "react"
import { Container } from "@design-system/components"
import PinnedRepository from "./components/PinnedItem"
import ItemContainer from "../ItemContainer"
import { useIsClient } from "@design-system/hooks"
import { getPinnedItems, PinnableItem } from "@/apis/github"

const GithubContent = ({}) => {
  const isClient = useIsClient()
  const [pinnedItem, setPinnedItem] = useState<PinnableItem[] | undefined>(
    undefined,
  )

  useEffect(() => {
    if (!isClient) return
    const fetchTistoryRecentPosts = async () => {
      setPinnedItem(await getPinnedItems())
    }
    fetchTistoryRecentPosts()
  }, [isClient])

  return (
    <ItemContainer title={"Github"}>
      {
        <Container
          minHeight={"24rem"}
          alignment={"columnTopLeft"}
          gap={"medium"}
          layout={"fullWidth"}
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <PinnedRepository key={idx} item={pinnedItem?.[idx]} />
          ))}
        </Container>
      }
    </ItemContainer>
  )
}

export default GithubContent
