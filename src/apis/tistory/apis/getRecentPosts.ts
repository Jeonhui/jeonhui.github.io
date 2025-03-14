import proxyAxios from "@/apis/proxy"
import { TISTORY } from "@/constants"
import Parser from "rss-parser"
import { PostItem } from "@/apis/tistory/apis/types"

type GetRecentPostsProps = {
  limit?: number
}

const getRecentPosts = async ({ limit = 3 }: GetRecentPostsProps = {}) => {
  const rssParser = new Parser()
  return await proxyAxios
    .get<string>(TISTORY.RSS, {
      headers: {
        "Content-Type": "application/xml",
      },
    })
    .then(async (response) => await rssParser.parseString(response.data))
    .then((data) =>
      data.items
        .map<PostItem>((item) => ({
          author: item.author,
          categories: item.categories ?? [],
          comments: item.comments,
          content: item.content ?? "",
          contentSnippet: item.contentSnippet ?? "",
          creator: item.creator,
          guid: item.guid,
          isoDate: item.isoDate,
          link: item.link,
          pubDate: item.pubDate,
          title: item.title ?? "TITLE",
        }))
        .slice(0, limit),
    )
}

export default getRecentPosts
