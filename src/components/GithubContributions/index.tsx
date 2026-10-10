import type { ContributionCalendar } from "@/apis/github"
import ContributionSkyline, { type ContributionDay } from "@/components/ui/contribution-skyline"

type Props = { calendar: ContributionCalendar | null }

// Calendar is scraped at build time (see getPublicContributions); only plain { date, count } pairs reach the client.
const GithubContributions = ({ calendar }: Props) => {
  if (!calendar) return null
  const data: ContributionDay[] = calendar.weeks.flatMap((w) =>
    w.contributionDays.map((d) => ({ date: d.date.toISOString().slice(0, 10), count: d.contributionCount })),
  )
  return <ContributionSkyline data={data} title="GitHub 기록" />
}

export default GithubContributions
