import PinnedItem from "./components/PinnedItem"
import type { PinnableItem } from "@/apis/github"

const PinnedItemContainer = ({ items }: { items: PinnableItem[] }) => {
  if (items.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium text-[var(--color-muted)]">고정한 저장소</h3>
      <ul className="flex flex-col border-t border-[var(--color-rule)]">
        {items.map((item) => (
          <PinnedItem key={item.name} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default PinnedItemContainer
