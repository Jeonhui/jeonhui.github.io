import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr"
import { siGithub } from "simple-icons"
import { PROFILE } from "@/data"
import BrandIcon from "../ui/BrandIcon"

// Ft2 · Inline single line - contact facts, nothing to sell.
const SiteFooter = () => (
  <footer className="mx-auto mt-[var(--space-2xl)] w-full max-w-[880px] px-5 pb-[var(--space-xl)] print:hidden">
    <div className="flex flex-col gap-2 border-t border-[var(--color-rule)] pt-[var(--space-md)] text-sm text-[var(--color-muted)] sm:flex-row sm:items-baseline sm:justify-between">
      <span>연락은 메일로 주세요.</span>
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-1.5 whitespace-nowrap text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors duration-[var(--dur-short)] hover:decoration-[var(--color-ink)]"
        >
          <EnvelopeSimple aria-hidden className="h-3.5 w-3.5" />
          {PROFILE.email}
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors duration-[var(--dur-short)] hover:text-[var(--color-ink)]">
          <BrandIcon icon={siGithub} className="h-3.5 w-3.5" />
          GitHub
        </a>
        <span className="whitespace-nowrap text-[var(--color-faint)]">© {new Date().getFullYear()} {PROFILE.name}</span>
      </div>
    </div>
  </footer>
)

export default SiteFooter
