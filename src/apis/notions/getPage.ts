import { NotionAPI } from "notion-client"
import { createProxyServerUrlWithTargetUrl } from "@/apis/proxy"
import { NOTIONS } from "@/constants"
import { NOTION_AUTH_TOKEN } from "@env"

const notionApi = new NotionAPI({
  apiBaseUrl: createProxyServerUrlWithTargetUrl({ targetUrl: NOTIONS.API }),
  authToken: NOTION_AUTH_TOKEN,
})

async function getPage(pageId: string) {
  return await notionApi.getPage(pageId)
}

export default getPage
