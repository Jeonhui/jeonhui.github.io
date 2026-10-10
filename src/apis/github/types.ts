// Contribution
export type ContributionLevel =
  | "FIRST_QUARTILE"
  | "FOURTH_QUARTILE"
  | "NONE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"

export type ContributionDays = {
  color: string
  contributionCount: number
  contributionLevel: ContributionLevel
  date: Date
  weekday: number
}

export type ContributionCalendarWeek = {
  contributionDays: ContributionDays[]
  firstDay: Date
}

export type ContributionCalendar = {
  totalContributions: number
  weeks: ContributionCalendarWeek[]
}

