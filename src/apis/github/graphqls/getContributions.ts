import { gql } from "@apollo/client"
import githubClient from "@/apis/github/client/githubClient"
import {
  ContributionCalendar,
  ContributionCalendarWeek,
  ContributionDays,
  UserContributionsCollection,
} from "./types"

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
  from.setDate(from.getDate() + 1)
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
