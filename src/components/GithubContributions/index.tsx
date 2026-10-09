"use client"

import { useEffect, useRef, useState } from "react"
import type { ContributionCalendar, ContributionLevel } from "@/apis/github"

const LEVEL: Record<ContributionLevel, string> = {
  NONE: "var(--contrib-0)",
  FIRST_QUARTILE: "var(--contrib-1)",
  SECOND_QUARTILE: "var(--contrib-2)",
  THIRD_QUARTILE: "var(--contrib-3)",
  FOURTH_QUARTILE: "var(--contrib-4)",
}

type Props = { calendar: ContributionCalendar | null }

// Calendar is fetched at build time (see getPublicContributions) and passed in.
// Cells sweep in column by column with a CSS animation, once, when the graph enters view.
const GithubContributions = ({ calendar: cal }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  if (!cal) return null

  return (
    <div ref={rootRef} className="rounded-[var(--radius-card)] bg-[var(--color-paper-2)] p-5">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-foreground">GitHub 기여</span>
        <span className="text-xs text-muted-foreground">
          최근 1년 <span className="text-foreground tabular-nums">{cal.totalContributions.toLocaleString()}</span>회
        </span>
      </div>

      <div ref={scrollRef} className="scrollbar-hide overflow-x-auto">
        <div
          className={`contrib-grid flex w-max gap-[3px] ${shown ? "is-shown" : ""}`}
          style={{ height: "calc(10px * 7 + 3px * 6)" }}
        >
          {cal.weeks.map((w, i) => (
            <div key={i} className="flex h-full flex-col gap-[3px] first:justify-end">
              {w.contributionDays.map((d, j) => (
                <div
                  key={j}
                  className="contrib-cell h-[10px] w-[10px] rounded-[3px]"
                  title={`${new Date(d.date).toISOString().slice(0, 10)}: ${d.contributionCount}회`}
                  style={{ backgroundColor: LEVEL[d.contributionLevel], animationDelay: `${i * 12}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
        적음
        {Object.values(LEVEL).map((c) => (
          <span key={c} className="h-[10px] w-[10px] rounded-[3px]" style={{ background: c }} />
        ))}
        많음
      </div>
    </div>
  )
}

export default GithubContributions
