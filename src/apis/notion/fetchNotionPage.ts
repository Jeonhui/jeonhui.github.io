import { NotionAPI } from "notion-client"
import { ExtendedRecordMap } from "notion-types"

const notion = new NotionAPI()

const fetchNotionPage = async (pageId: string): Promise<ExtendedRecordMap> => {
  return await notion.getPage(pageId)
}

export default fetchNotionPage
