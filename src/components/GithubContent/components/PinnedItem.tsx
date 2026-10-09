import { Star } from "lucide-react"
import { PinnableItem } from "@/apis/github"

const PinnedItem = ({ item }: { item: PinnableItem }) => (
  <li className="border-b border-[var(--color-rule)]">
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-baseline justify-between gap-4 py-[var(--space-xs)]"
    >
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-[15px] text-[var(--color-ink)] underline decoration-transparent underline-offset-4 transition-colors duration-[var(--dur-short)] group-hover:decoration-[var(--color-ink)]">
          {item.name}
        </span>
        {item.description && <span className="truncate text-sm text-[var(--color-muted)]">{item.description}</span>}
      </span>
      <span className="flex shrink-0 items-center gap-3 text-sm tabular-nums text-[var(--color-muted)]">
        {item.primaryLanguage && (
          <span className="flex items-center gap-1.5">
            <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: item.primaryLanguage.color }} />
            {item.primaryLanguage.name}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star aria-hidden className="h-3.5 w-3.5" strokeWidth={1.75} />
          {item.stargazerCount}
        </span>
      </span>
    </a>
  </li>
)

export default PinnedItem
