import NextLink from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Project } from "@/data"

const ProjectList = ({ items }: { items: Project[] }) => (
  <ul className="flex flex-col">
    {items.map((p) => (
      <li key={p.id} className="border-t border-[var(--color-rule)] last:border-b">
        <NextLink
          href={`/portfolio#${p.id}`}
          className="group grid gap-[var(--space-md)] py-[var(--space-lg)] sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] sm:items-center sm:gap-[var(--space-xl)]"
        >
          <div className="flex min-w-0 flex-col gap-2">
            <h3 className="flex items-center gap-1.5 text-xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
              {p.name}
              <ArrowUpRight
                aria-hidden
                className="h-4 w-4 text-[var(--color-faint)] transition-[color,transform] duration-[var(--dur-short)] group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-[var(--color-ink)]"
              />
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              <span className="tabular-nums">{p.period.split(" · ")[0]}</span>
              <br />
              {p.role}
            </p>
            <p className="text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">{p.summary}</p>
            {p.highlights.length > 0 && <p className="text-sm text-[var(--color-ink)]">{p.highlights.join(", ")}</p>}
          </div>
          {p.image && (
            <figure className="overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-paper-2)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={`${p.name} 실행 화면`} loading="lazy" className="w-full p-3" />
            </figure>
          )}
        </NextLink>
      </li>
    ))}
  </ul>
)

export default ProjectList
