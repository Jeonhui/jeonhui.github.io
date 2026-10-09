import { Link as NextLink } from "next-view-transitions"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { Project } from "@/data"
import { ClipReveal } from "../ui/motion"
import ProjectImage from "../ui/ProjectImage"

const Meta = ({ p }: { p: Project }) => (
  <>
    <h3 className="flex items-center gap-1.5 text-xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
      {p.name}
      <ArrowUpRight
        aria-hidden
        className="h-4 w-4 text-[var(--color-faint)] transition-[color,transform] duration-[var(--dur-short)] group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-[var(--color-ink)]"
      />
    </h3>
    <p className="text-sm text-[var(--color-muted)]">
      <span className="tabular-nums">{p.period.split(" (")[0]}</span>, {p.role}
    </p>
    <p className="text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">{p.summary}</p>
    {p.highlights.length > 0 && <p className="text-sm text-[var(--color-ink)]">{p.highlights.join(", ")}</p>}
  </>
)

const Shot = ({ p, sizes, className = "" }: { p: Project; sizes: string; className?: string }) =>
  p.image ? (
    <ClipReveal className={`overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-paper-2)] ${className}`}>
      <ProjectImage
        src={p.image}
        alt={`${p.name} 실행 화면`}
        sizes={sizes}
        className="p-3 transition-transform duration-[var(--dur-med)] ease-[var(--ease-out)] group-hover:scale-[1.015]"
      />
    </ClipReveal>
  ) : null

// One featured project at full width, then the rest as a two-column pair.
const ProjectList = ({ items }: { items: Project[] }) => {
  const [featured, ...rest] = items
  if (!featured) return null

  return (
    <div className="flex flex-col gap-[var(--space-2xl)]">
      <NextLink href={`/portfolio#${featured.id}`} className="group flex flex-col gap-[var(--space-md)]">
        <Shot p={featured} sizes="(min-width: 880px) 840px, 100vw" />
        <div className="flex max-w-[64ch] flex-col gap-2">
          <Meta p={featured} />
        </div>
      </NextLink>

      {rest.length > 0 && (
        <div className="grid gap-x-[var(--space-xl)] gap-y-[var(--space-2xl)] sm:grid-cols-2">
          {rest.map((p) => (
            <NextLink key={p.id} href={`/portfolio#${p.id}`} className="group flex min-w-0 flex-col gap-[var(--space-sm)]">
              <Shot p={p} sizes="(min-width: 640px) 420px, 100vw" />
              <div className="flex flex-col gap-2">
                <Meta p={p} />
              </div>
            </NextLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectList
