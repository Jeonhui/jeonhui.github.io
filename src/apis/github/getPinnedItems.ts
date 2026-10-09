import { GITHUB } from "@/constants"
import type { PinnableItem } from "./types"

const QUERY = `
  query ($userName: String!) {
    user(login: $userName) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            primaryLanguage { name color }
          }
        }
      }
    }
  }
`

/**
 * Pinned repositories, fetched at build time on the server.
 * The token never reaches the browser. Repos the token can't read come back as null and are skipped.
 */
const getPinnedItems = async (userName: string = GITHUB.USERNAME): Promise<PinnableItem[]> => {
  const token = process.env.GITHUB_TOKEN ?? process.env.NEXT_PUBLIC_GITHUB_TOKEN
  if (!token) return []
  try {
    const res = await fetch(GITHUB.API, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { userName } }),
    })
    if (!res.ok) return []
    const json = await res.json()
    const nodes: (PinnableItem | null)[] = json?.data?.user?.pinnedItems?.nodes ?? []
    return nodes.filter((node): node is PinnableItem => node !== null && typeof node.name === "string")
  } catch {
    return []
  }
}

export default getPinnedItems
