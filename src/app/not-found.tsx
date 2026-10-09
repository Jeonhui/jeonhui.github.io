import { Link as NextLink } from "next-view-transitions"

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 text-center">
      <div className="page-glow" />
      <h1 className="text-[clamp(4rem,18vw,9rem)] font-bold leading-none tracking-[-0.06em] text-[var(--color-ink)]">
        404
      </h1>
      <p className="text-[var(--color-muted)]">페이지를 찾을 수 없습니다.</p>
      <NextLink
        href="/"
        className="inline-flex h-10 items-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-medium text-[var(--color-accent-ink)] transition-[filter] duration-[var(--dur-short)] hover:brightness-110"
      >
        홈으로
      </NextLink>
    </div>
  )
}
