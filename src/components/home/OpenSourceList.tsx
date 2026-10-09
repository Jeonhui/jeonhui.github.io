import { ArrowUpRight } from "lucide-react"
import { siGithub } from "simple-icons"
import { Project } from "@/data"
import BrandIcon from "../ui/BrandIcon"

const OpenSourceList = ({ items }: { items: Project[] }) => (
  <ul className="flex flex-col gap-[var(--space-md)]">
    {items.map((p) => (
      <li key={p.id}>
        <a
          href={p.links?.[0]?.href ?? `/portfolio#${p.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-1"
        >
          <span className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-ink)]">
            <BrandIcon icon={siGithub} className="h-4 w-4 text-[var(--color-ink-2)]" />
            <span className="underline decoration-transparent underline-offset-4 transition-colors duration-[var(--dur-short)] group-hover:decoration-[var(--color-ink)]">
              {p.name}
            </span>
            <ArrowUpRight aria-hidden className="h-3.5 w-3.5 text-[var(--color-faint)]" />
          </span>
          <span className="text-sm leading-6 text-[var(--color-muted)] text-pretty">{p.summary}</span>
        </a>
      </li>
    ))}
  </ul>
)

export default OpenSourceList
