import { gql } from "@apollo/client"
import githubClient from "@/apis/github/client/githubClient"
import { RepositoryObject } from "@/apis/github"

const GET_READ_ME = gql`
  query GetReadMe($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      object(expression: "main:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`

const getReadMe = async (owner: string, repositoryName: string) => {
  return await githubClient
    .query<RepositoryObject>({
      query: GET_READ_ME,
      variables: {
        owner: owner,
        name: repositoryName,
      },
    })
    .then((data) =>
      data.data.repository.object.text.replace(/<!--[\s\S]*?-->/g, "").trim(),
    )
    .catch(() => "")
}

export default getReadMe
