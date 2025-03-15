import { gql } from "@apollo/client"
import githubClient from "@/apis/github/client/githubClient"
import { PinnableItem, UserPinnableItemConnection } from "./types"
import { GITHUB } from "@/constants"

const GET_PINNED_ITEMS = gql`
  query GetPinnedItems(
    $userName: String!
    $types: [PinnableItemType!]
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    user(login: $userName) {
      pinnedItems(
        types: $types
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        totalCount
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
`

const getPinnedItems = async (
  userName: string = GITHUB.USERNAME,
  after?: string,
  before?: string,
  first: number = 10,
  last?: number,
): Promise<PinnableItem[]> => {
  return await githubClient
    .query<UserPinnableItemConnection>({
      query: GET_PINNED_ITEMS,
      variables: {
        userName,
        types: ["REPOSITORY"],
        after,
        before,
        first,
        last,
      },
    })
    .then((data) => data.data.user?.pinnedItems?.nodes ?? [])
}

export default getPinnedItems
