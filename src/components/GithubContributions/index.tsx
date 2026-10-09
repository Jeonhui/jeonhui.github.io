"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
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
const GithubContributions = ({ calendar: cal }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  // Keep the most recent weeks in view on narrow screens.
  useEffect(() => {
    if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth
  }, [])

  if (!cal) return null
  const weeks = cal.weeks

  return (
    <div className="rounded-[var(--radius-card)] bg-[var(--color-paper-2)] p-5">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-foreground">GitHub 기여</span>
        <span className="text-xs text-muted-foreground">
          최근 1년 <span className="text-foreground tabular-nums">{cal.totalContributions.toLocaleString()}</span>회
        </span>
      </div>

      <div ref={ref} className="scrollbar-hide overflow-x-auto">
        <div className="flex w-max gap-[3px]" style={{ height: "calc(10px * 7 + 3px * 6)" }}>
          {weeks.map((w, i) => (
            <div key={i} className="flex h-full flex-col gap-[3px] first:justify-end">
              {w.contributionDays.map((d, j) => (
                <motion.div
                  key={j}
                  className="h-[10px] w-[10px] rounded-[3px]"
                  title={`${new Date(d.date).toISOString().slice(0, 10)}: ${d.contributionCount}회`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1, backgroundColor: LEVEL[d.contributionLevel] }}
                  transition={{ delay: i * 0.006, duration: 0.3 }}
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
