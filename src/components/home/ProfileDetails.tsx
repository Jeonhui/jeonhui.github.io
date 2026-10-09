import { ACTIVITIES, CERTIFICATIONS, EDUCATION, SKILLS, TimelineItem } from "@/data"
import Stack from "../ui/Stack"

const Group = ({ title, items }: { title: string; items: TimelineItem[] }) => (
  <div className="flex flex-col gap-[var(--space-sm)]">
    <h3 className="text-sm font-medium text-[var(--color-muted)]">{title}</h3>
    <ul className="flex flex-col gap-[var(--space-md)]">
      {items.map((it) => (
        <li key={it.title} className="flex flex-col gap-0.5">
          <span className="text-[15px] font-medium text-[var(--color-ink)]">{it.title}</span>
          {it.tag && <span className="text-sm text-[var(--color-accent)]">{it.tag}</span>}
          <span className="text-sm tabular-nums text-[var(--color-muted)]">{it.period}</span>
          {it.description && (
            <p className="mt-0.5 text-sm leading-6 text-[var(--color-ink-2)] text-pretty">{it.description}</p>
          )}
        </li>
      ))}
    </ul>
  </div>
)

const ProfileDetails = () => (
  <div className="flex flex-col gap-[var(--space-2xl)]">
    <div className="flex flex-col gap-[var(--space-md)]">
      {SKILLS.map((s) => (
        <div key={s.group} className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-[var(--color-muted)]">{s.group}</h3>
          <Stack items={s.items} className="text-[15px] text-[var(--color-ink-2)]" />
        </div>
      ))}
    </div>
    <div className="grid gap-[var(--space-2xl)] sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <Group title="활동" items={ACTIVITIES} />
      <div className="flex flex-col gap-[var(--space-2xl)]">
        <Group title="교육" items={EDUCATION} />
        <Group title="자격증" items={CERTIFICATIONS} />
      </div>
    </div>
  </div>
)

export default ProfileDetails
