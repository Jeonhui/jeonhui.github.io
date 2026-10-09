/* Hallmark · genre: atmospheric · macrostructure: Long Document · design-system: design.md · designed-as-app */
import type { Metadata } from "next"
import { DownloadLinkButton, ExperienceList, ProjectDetail, Section } from "@/components"
import { METADATA } from "@/constants"
import { downloadLinks, EXPERIENCES, PROFILE, PROJECTS } from "@/data"

export const metadata: Metadata = METADATA.PORTFOLIO

const apps = PROJECTS.filter((p) => p.kind === "app")
const openSource = PROJECTS.filter((p) => p.kind === "opensource")

const TOC = [
  { id: "experience", label: "경력" },
  ...apps.map((p) => ({ id: p.id, label: p.name })),
  ...openSource.map((p) => ({ id: p.id, label: p.name })),
]

const Portfolio = () => (
  <div className="relative mx-auto w-full max-w-[760px] px-5">
    <div className="page-glow" />
    <header className="flex flex-col gap-[var(--space-md)] pt-[var(--space-2xl)] pb-[var(--space-md)]">
      <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--color-ink)]">
        포트폴리오
      </h1>
      <div className="flex flex-col gap-3">
        {PROFILE.intro.map((p) => (
          <p key={p} className="text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">
            {p}
          </p>
        ))}
      </div>
      {downloadLinks.portfolio && (
        <div>
          <DownloadLinkButton downloadLink={downloadLinks.portfolio} />
        </div>
      )}
      <nav aria-label="목차" className="mt-[var(--space-sm)] flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-rule)] pt-[var(--space-sm)]">
        {TOC.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="whitespace-nowrap text-sm text-[var(--color-muted)] transition-colors duration-[var(--dur-short)] hover:text-[var(--color-ink)]"
          >
            {t.label}
          </a>
        ))}
      </nav>
    </header>

    <Section id="experience" title="경력" space="tight">
      <ExperienceList items={EXPERIENCES} full />
    </Section>

    <Section id="projects" title="프로젝트">
      <div className="flex flex-col gap-[var(--space-3xl)]">
        {apps.map((p) => (
          <ProjectDetail key={p.id} project={p} />
        ))}
      </div>
    </Section>

    <Section id="open-source" title="오픈소스" space="tight">
      <div className="flex flex-col gap-[var(--space-2xl)]">
        {openSource.map((p) => (
          <ProjectDetail key={p.id} project={p} />
        ))}
      </div>
    </Section>
  </div>
)

export default Portfolio
