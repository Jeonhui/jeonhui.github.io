import { ReactNode } from "react"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

type Props = {
  id?: string
  title: string
  lead?: string
  action?: { label: string; href: string; external?: boolean }
  space?: "tight" | "normal" | "loose"
  children: ReactNode
}

const SPACE = {
  tight: "py-[var(--space-2xl)]",
  normal: "py-[var(--space-2xl)] sm:py-[var(--space-3xl)]",
  loose: "pt-[var(--space-3xl)] pb-[var(--space-2xl)] sm:pt-[9rem] sm:pb-[var(--space-3xl)]",
}

const Section = ({ id, title, lead, action, space = "normal", children }: Props) => (
  <section id={id} className={SPACE[space]}>
    <div className="mb-[var(--space-xl)] flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <div className="flex min-w-0 flex-col gap-2">
        <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em] text-[var(--color-ink)]">
          {title}
        </h2>
        {lead && <p className="max-w-[52ch] text-[15px] leading-7 text-[var(--color-muted)]">{lead}</p>}
      </div>
      {action && (
        <a
          href={action.href}
          {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm text-[var(--color-muted)] transition-colors duration-[var(--dur-short)] hover:text-[var(--color-ink)]"
        >
          {action.label}
          <ArrowUpRight aria-hidden className="h-3.5 w-3.5 transition-transform duration-[var(--dur-short)] group-hover:-translate-y-px group-hover:translate-x-px" />
        </a>
      )}
    </div>
    {children}
  </section>
)

export default Section
