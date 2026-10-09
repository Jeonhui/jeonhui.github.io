import NextLink from "next/link"
import { ArrowRight, DeviceMobile, HardDrives, MapPin, Palette, Robot, Scan, Signature, SquaresFour } from "@phosphor-icons/react/dist/ssr"
import { Experience } from "@/data"
import Stack from "../ui/Stack"

const AREA_ICON = {
  server: HardDrives,
  signature: Signature,
  bot: Robot,
  smartphone: DeviceMobile,
  palette: Palette,
  scan: Scan,
  map: MapPin,
  blocks: SquaresFour,
}

type Props = { items: Experience[]; full?: boolean }

const ExperienceList = ({ items, full = false }: Props) => (
  <ol className="flex flex-col gap-[var(--space-3xl)]">
    {items.map((exp) => (
      <li key={exp.id} id={`exp-${exp.id}`} className="flex flex-col gap-[var(--space-md)]">
        <header className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]">{exp.company}</h3>
            <span className="shrink-0 text-sm tabular-nums text-[var(--color-muted)]">{exp.period}</span>
          </div>
          <p className="text-sm text-[var(--color-muted)]">{exp.role}</p>
        </header>

        <p className="max-w-[64ch] text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">{exp.summary}</p>

        {full ? (
          <div className="flex flex-col gap-[var(--space-xl)] pt-[var(--space-xs)]">
            {exp.groups.map((g) => {
              const Icon = g.icon ? AREA_ICON[g.icon] : null
              return (
                <section key={g.title} className="flex flex-col gap-2">
                  <h4 className="flex items-center gap-2 text-base font-semibold text-[var(--color-ink)]">
                    {Icon && <Icon aria-hidden className="h-4 w-4 text-[var(--color-accent)]" />}
                    {g.title}
                  </h4>
                  {g.description && <p className="text-sm text-[var(--color-muted)]">{g.description}</p>}
                  <ul className="mt-1 flex list-disc flex-col gap-1.5 pl-4 marker:text-[var(--color-faint)]">
                    {g.points.map((p) => (
                      <li key={p} className="pl-1 text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">
                        {p}
                      </li>
                    ))}
                  </ul>
                </section>
              )
            })}
          </div>
        ) : (
          <dl className="grid gap-x-[var(--space-xl)] gap-y-[var(--space-lg)] pt-[var(--space-xs)] sm:grid-cols-2">
            {exp.groups.map((g) => {
              const Icon = g.icon ? AREA_ICON[g.icon] : null
              return (
                <div key={g.title} className="flex min-w-0 flex-col gap-1.5">
                  <dt className="flex items-center gap-2 text-[15px] font-semibold text-[var(--color-ink)]">
                    {Icon && <Icon aria-hidden className="h-[18px] w-[18px] shrink-0 text-[var(--color-accent)]" />}
                    {g.title}
                  </dt>
                  <dd className="text-sm leading-6 text-[var(--color-ink-2)] text-pretty">{g.summary}</dd>
                </div>
              )
            })}
          </dl>
        )}

        <Stack items={exp.stack} />

        {!full && (
          <NextLink
            href={`/portfolio#exp-${exp.id}`}
            className="group inline-flex w-fit items-center gap-1.5 text-sm text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors duration-[var(--dur-short)] hover:decoration-[var(--color-ink)]"
          >
            자세한 내용
            <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform duration-[var(--dur-short)] group-hover:translate-x-0.5" />
          </NextLink>
        )}
      </li>
    ))}
  </ol>
)

export default ExperienceList
