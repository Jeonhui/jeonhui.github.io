import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { siAppstore, siGithub } from "simple-icons"
import { Project } from "@/data"
import BrandIcon from "../ui/BrandIcon"
import Stack from "../ui/Stack"

const linkIcon = (label: string) =>
  label === "GitHub" ? siGithub : label === "App Store" ? siAppstore : null

const ProjectDetail = ({ project }: { project: Project }) => (
  <article id={project.id} className="flex scroll-mt-28 flex-col gap-[var(--space-md)]">
    <header className="flex flex-col gap-2">
      <span className="text-sm tabular-nums text-[var(--color-faint)]">{project.period}</span>
      <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.025em] text-[var(--color-ink)]">
        {project.name}
        {project.subtitle && (
          <span className="ml-3 text-base font-normal tracking-normal text-[var(--color-muted)]">{project.subtitle}</span>
        )}
      </h3>
      <p className="text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">{project.summary}</p>
    </header>

    {project.image && (
      <figure className="overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-paper-2)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.image} alt={`${project.name} 실행 화면`} loading="lazy" className="w-full p-4" />
      </figure>
    )}

    <dl className="grid grid-cols-1 gap-x-[var(--space-lg)] gap-y-2 text-sm sm:grid-cols-[auto_minmax(0,1fr)]">
      <dt className="text-[var(--color-faint)]">역할</dt>
      <dd className="text-[var(--color-ink)]">{project.role}</dd>
      {project.team && (
        <>
          <dt className="text-[var(--color-faint)]">팀</dt>
          <dd className="text-[var(--color-ink)]">{project.team}</dd>
        </>
      )}
    </dl>

    <ul className="flex list-disc flex-col gap-2 pl-4 marker:text-[var(--color-faint)]">
      {project.points.map((p) => (
        <li key={p} className="pl-1 text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">
          {p}
        </li>
      ))}
    </ul>

    <Stack items={project.stack} />

    {project.links && project.links.length > 0 && (
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {project.links.map((l) => {
          const icon = linkIcon(l.label)
          return (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors duration-[var(--dur-short)] hover:decoration-[var(--color-ink)]"
            >
              {icon && <BrandIcon icon={icon} className="h-3.5 w-3.5" />}
              {l.label}
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5 text-[var(--color-faint)]" />
            </a>
          )
        })}
      </div>
    )}
  </article>
)

export default ProjectDetail
