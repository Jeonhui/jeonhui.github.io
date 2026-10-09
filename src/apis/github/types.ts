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

// Pinned repositories
export type Language = {
  color: string
  name: string
}

export type PinnableItem = {
  name: string
  description: string
  url: string
  stargazerCount: number
  primaryLanguage: Language | null
}
