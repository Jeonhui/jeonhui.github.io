import { GITHUB } from "@/constants"
import type { ContributionCalendar, ContributionDays, ContributionLevel } from "./graphqls/types"

const LEVELS: ContributionLevel[] = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"]

/**
 * Reads the public contribution graph (the same one on github.com/<user>) at build time.
 * Unlike the GraphQL API with a public-only token, this includes private contributions
 * when "Private contributions" is enabled on the profile - and needs no token at all.
 */
const getPublicContributions = async (
  userName: string = GITHUB.USERNAME,
): Promise<ContributionCalendar | null> => {
  try {
    const res = await fetch(`https://github.com/users/${userName}/contributions`, {
      headers: { "User-Agent": "jeonhui.com build" },
    })
    if (!res.ok) return null
    const html = await res.text()

    const counts = new Map<string, number>()
    for (const [, id, text] of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
      const n = text.match(/^([\d,]+) contributions?/)
      counts.set(id, n ? Number(n[1].replace(/,/g, "")) : 0)
    }

    const days: ContributionDays[] = []
    for (const [tag] of html.matchAll(/<td[^>]*ContributionCalendar-day[^>]*>/g)) {
      const date = tag.match(/data-date="([^"]+)"/)?.[1]
      const id = tag.match(/\bid="([^"]+)"/)?.[1]
      const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0)
      if (!date || !id) continue
      const d = new Date(`${date}T00:00:00Z`)
      days.push({
        date: d,
        weekday: d.getUTCDay(),
        color: "",
        contributionCount: counts.get(id) ?? 0,
        contributionLevel: LEVELS[level] ?? "NONE",
      })
    }
    if (days.length === 0) return null

    days.sort((a, b) => a.date.getTime() - b.date.getTime())
    const weeks: ContributionCalendar["weeks"] = []
    for (const day of days) {
      if (weeks.length === 0 || day.weekday === 0) weeks.push({ contributionDays: [], firstDay: day.date })
      weeks[weeks.length - 1].contributionDays.push(day)
    }

    return {
      totalContributions: days.reduce((sum, d) => sum + d.contributionCount, 0),
      weeks,
    }
  } catch {
    return null
  }
}

export default getPublicContributions
