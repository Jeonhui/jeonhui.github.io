import { NotionAPI } from "notion-client"

const notionApi = new NotionAPI({})

async function getPage(pageId: string) {
  return await notionApi.getPage(pageId)
}

export default getPage
