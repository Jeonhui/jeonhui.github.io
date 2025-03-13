import notionClient from "../client/notionClient"

async function getPage(pageId: string) {
  return await notionClient.getPage(pageId)
}

export default getPage
