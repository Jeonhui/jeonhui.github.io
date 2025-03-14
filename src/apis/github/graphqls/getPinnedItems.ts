import { gql } from "@apollo/client"
import githubClient from "@/apis/github/client/githubClient"
import {
  PinnableItemConnection,
  PinnableItemType,
  UserPinnableItemConnection,
} from "./types"

const GET_PINNED_ITEMS = gql`
  enum PinnableItemType {
    REPOSITORY
    GIST
    ISSUE
    PROJECT
    PULL_REQUEST
    USER
  }

  query (
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
        totalCount
      }
    }
  }
`

const getPinnedItems = async (
  userName: string,
  after?: string,
  before?: string,
  first: number = 10,
  last?: number,
): Promise<PinnableItemConnection> => {
  const types: PinnableItemType[] = ["REPOSITORY"]
  return await githubClient
    .query<UserPinnableItemConnection>({
      query: GET_PINNED_ITEMS,
      variables: { userName, types, after, before, first, last },
    })
    .then(({ data }) => {
      return data.user.pinnedItems
    })
}

export default getPinnedItems
