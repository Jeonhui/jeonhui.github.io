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

type ContributionLevel =
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

export default getContributions
