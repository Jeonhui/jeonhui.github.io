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

export type ContributionsCollection = {
  contributionCalendar: ContributionCalendar
}

export type UserContributionsCollection = {
  user: { contributionsCollection: ContributionsCollection }
}

// PinableItem
export type PinnableItemType =
  | "REPOSITORY"
  | "GIST"
  | "ISSUE"
  | "PROJECT"
  | "PULL_REQUEST"
  | "USER"

export type Language = {
  color: string
  name: string
}

export type PinnableItem = {
  name: string
  description: string
  url: string
  stargazerCount: number
  primaryLanguage: Language
}

export type PinnableItemConnection = {
  nodes: PinnableItem[]
  totalCount: number
}

export type UserPinnableItemConnection = {
  user: { pinnedItems: PinnableItemConnection }
}
