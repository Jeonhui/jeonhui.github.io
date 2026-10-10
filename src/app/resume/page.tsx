/* Hallmark · genre: atmospheric · macrostructure: Long Document · design-system: design.md · designed-as-app */
import type { Metadata } from "next"
import { ReactNode } from "react"
import { DownloadLinkButton } from "@/components"
import { METADATA } from "@/constants"
import {
  ACTIVITIES,
  CERTIFICATIONS,
  downloadLinks,
  EDUCATION,
  EXPERIENCES,
  PROFILE,
  PROJECTS,
  SKILLS,
  TimelineItem,
} from "@/data"

export const metadata: Metadata = METADATA.RESUME

const Block = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="flex flex-col gap-[var(--space-md)] border-t border-[var(--color-rule)] py-[var(--space-xl)] print:py-6">
    <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]">{title}</h2>
    <div className="flex min-w-0 flex-col gap-[var(--space-lg)]">{children}</div>
  </section>
)

const Row = ({
  title,
  meta,
  sub,
  children,
}: {
  title: ReactNode
  meta: string
  sub?: string
  children?: ReactNode
}) => (
  <div className="flex flex-col gap-2 print:break-inside-avoid">
    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
      <h3 className="text-[17px] font-semibold tracking-tight text-[var(--color-ink)]">{title}</h3>
      <span className="shrink-0 text-xs tabular-nums text-[var(--color-muted)]">{meta}</span>
    </div>
    {sub && <p className="text-sm text-[var(--color-accent)]">{sub}</p>}
    {children}
  </div>
)

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="flex list-disc flex-col gap-1 pl-4 marker:text-[var(--color-faint)]">
    {items.map((p) => (
      <li key={p} className="pl-1 text-sm leading-6 text-[var(--color-ink-2)] text-pretty">
        {p}
      </li>
    ))}
  </ul>
)

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <>
    {items.map((it) => (
      <Row key={it.title} title={it.title} meta={it.period} sub={it.tag}>
        {it.description && <p className="text-sm leading-6 text-[var(--color-ink-2)]">{it.description}</p>}
      </Row>
    ))}
  </>
)

const Resume = () => (
  <div className="relative mx-auto w-full max-w-[760px] px-5 pb-16">
    <div className="page-glow print:hidden" />

    <header className="flex flex-col gap-[var(--space-md)] pt-[var(--space-2xl)] pb-[var(--space-xl)] print:pt-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--color-ink)]">
          {PROFILE.name}
          <span className="ml-3 text-[0.5em] font-medium tracking-[-0.02em] text-[var(--color-faint)]">
            {PROFILE.nameEn}
          </span>
        </h1>
        <p className="text-lg text-[var(--color-ink-2)]">{PROFILE.role}</p>
      </div>
      <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {[
          { k: "메일", v: PROFILE.email, href: `mailto:${PROFILE.email}` },
          { k: "GitHub", v: PROFILE.github.replace("https://", ""), href: PROFILE.github },
          { k: "포트폴리오", v: "jeonhui.com/portfolio", href: "/portfolio" },
        ].map((c) => (
          <div key={c.k} className="flex gap-2">
            <dt className="text-[var(--color-faint)]">{c.k}</dt>
            <dd>
              <a href={c.href} className="whitespace-nowrap text-[var(--color-ink)] transition-colors duration-[var(--dur-short)] hover:text-[var(--color-accent)]">
                {c.v}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      {downloadLinks.resume && (
        <div className="print:hidden">
          <DownloadLinkButton downloadLink={downloadLinks.resume} />
        </div>
      )}
    </header>

    <Block title="소개">
      <div className="flex flex-col gap-3">
        {PROFILE.intro.map((p) => (
          <p key={p} className="text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">
            {p}
          </p>
        ))}
      </div>
    </Block>

    <Block title="경력">
      {EXPERIENCES.map((exp) => (
        <Row key={exp.id} title={exp.company} meta={exp.period} sub={exp.role}>
          <p className="text-sm leading-6 text-[var(--color-ink-2)] text-pretty">{exp.summary}</p>
          {/* One sentence per area keeps the résumé short; the full list lives on /portfolio. */}
          <dl className="mt-2 grid gap-x-[var(--space-lg)] gap-y-3 sm:grid-cols-[150px_minmax(0,1fr)]">
            {exp.groups.map((g) => (
              <div key={g.title} className="contents">
                <dt className="text-sm font-semibold leading-6 text-[var(--color-ink)]">{g.title}</dt>
                <dd className="text-sm leading-6 text-[var(--color-ink-2)] text-pretty">{g.summary}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{exp.stack.join(", ")}</p>
        </Row>
      ))}
    </Block>

    <Block title="프로젝트">
      {PROJECTS.map((p) => (
        <Row
          key={p.id}
          title={
            <>
              {p.name}
              {p.kind === "opensource" && (
                <span className="ml-2 align-middle text-xs font-normal text-[var(--color-muted)]">오픈소스</span>
              )}
            </>
          }
          meta={p.period.split(" (")[0]}
          sub={p.role}
        >
          <p className="text-sm leading-6 text-[var(--color-ink-2)] text-pretty">{p.summary}</p>
          <Bullets items={p.points.slice(0, 2)} />
          <p className="text-xs leading-5 text-[var(--color-muted)]">{p.stack.join(", ")}</p>
        </Row>
      ))}
    </Block>

    <Block title="기술">
      <div className="flex flex-col gap-3">
        {SKILLS.map((s) => (
          <div key={s.group} className="grid gap-1 sm:grid-cols-[120px_1fr]">
            <span className="text-sm font-medium text-[var(--color-ink)]">{s.group}</span>
            <span className="text-sm text-[var(--color-muted)]">{s.items.join(", ")}</span>
          </div>
        ))}
      </div>
    </Block>

    <Block title="활동">
      <Timeline items={ACTIVITIES} />
    </Block>

    <Block title="교육">
      <Timeline items={EDUCATION} />
    </Block>

    <Block title="자격증">
      <Timeline items={CERTIFICATIONS} />
    </Block>
  </div>
)

export default Resume
