"use client"

import { useEffect, useState } from "react"
import PinnedItem from "./PinnedItem"
import { getPinnedItems, PinnableItem } from "@/apis/github"

const PinnedItemContainer = () => {
  const [items, setItems] = useState<PinnableItem[] | undefined>(undefined)

  useEffect(() => {
    getPinnedItems()
      .then(setItems)
      .catch(() => setItems([]))
  }, [])

  if (!items || items.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium text-[var(--color-muted)]">고정한 저장소</h3>
      <ul className="flex flex-col border-t border-[var(--color-rule)]">
        {items.slice(0, 6).map((item) => (
          <PinnedItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default PinnedItemContainer
