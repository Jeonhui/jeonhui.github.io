import { gql } from "@apollo/client"
import githubClient from "@/apis/github/client/githubClient"

/*
### ContributionLevel
FIRST_QUARTILE
- Lowest 25% of days of contributions.

FOURTH_QUARTILE
- Highest 25% of days of contributions. More contributions than the third quartile.

NONE
- No contributions occurred.

SECOND_QUARTILE
- Second lowest 25% of days of contributions. More contributions than the first quartile.

THIRD_QUARTILE
- Second highest 25% of days of contributions. More contributions than second quartile, less than the fourth quartile.
 */

export type ContributionLevel =
  | "FIRST_QUARTILE"
  | "FOURTH_QUARTILE"
  | "NONE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"

type ContributionDays = {
  color: string
  contributionCount: number
  contributionLevel: ContributionLevel
  date: Date
  weekday: number
}

type ContributionCalendarWeek = {
  contributionDays: ContributionDays[]
  firstDay: Date
}

export type ContributionCalendar = {
  totalContributions: number
  weeks: ContributionCalendarWeek[]
}

type ContributionsCollection = {
  contributionCalendar: ContributionCalendar
}

type UserContributionsCollection = {
  user: { contributionsCollection: ContributionsCollection }
}

const GET_CONTRIBUTION = gql`
  query ($userName: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $userName) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              contributionLevel
              date
            }
          }
        }
      }
    }
  }
`

const getDummyContributions = (month: number): ContributionCalendar => {
  const to = new Date()
  const from = new Date(to)
  from.setMonth(to.getMonth() - month)
  const startOfWeek = new Date(from)
  startOfWeek.setDate(from.getDate() - from.getDay())
  const endOfWeek = new Date(to)
  endOfWeek.setDate(to.getDate() + (6 - to.getDay()))
  const diffTime = Math.abs(endOfWeek.getTime() - startOfWeek.getTime())
  const diffDays = diffTime / (1000 * 3600 * 24)
  const weeksCount = Math.ceil(diffDays / 7)
  const weeks: ContributionCalendarWeek[] = Array.from(
    { length: weeksCount },
    (_, i) => {
      const contributionDays: ContributionDays[] = Array.from(
        { length: 7 },
        (_, j) => {
          const currentDay = new Date(startOfWeek)
          currentDay.setDate(startOfWeek.getDate() + i * 7 + j) // 각 주차의 날짜 설정
          if (currentDay < from || currentDay > to) {
            return null
          }
          return {
            color: "#ebedf0",
            contributionCount: 0,
            contributionLevel: "NONE",
            date: currentDay,
            weekday: currentDay.getDay(),
          } as ContributionDays
        },
      ).filter((value) => value !== null) // null 값 제거
      return {
        contributionDays: contributionDays,
        firstDay: contributionDays[0]?.date || null,
      }
    },
  )
  return {
    totalContributions: 0,
    weeks: weeks,
  }
}

const getContributions = async (
  userName: string,
  from: string,
  to: string,
): Promise<ContributionCalendar> => {
  return await githubClient
    .query<UserContributionsCollection>({
      query: GET_CONTRIBUTION,
      variables: { userName, from, to },
    })
    .then(({ data }) => {
      return data.user.contributionsCollection.contributionCalendar
    })
}

export { getDummyContributions }
export default getContributions
