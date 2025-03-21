import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import GITHUB from "@/constants/github"
import { GITHUB_TOKEN } from "@env"

const httpLink = createHttpLink({
  uri: GITHUB.API,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  }
})

const githubClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default githubClient
