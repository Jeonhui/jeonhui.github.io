import { getPage } from "@/apis/notions"
import { Layout, Section } from "@design/components"
import NotionClientRenderer from "./NotionClientRenderer"

type NotionPageProps = {
  pageId: string
}

const NotionPage = async ({ pageId }: NotionPageProps) => {
  const pageRecordMap = await getPage(pageId)
  console.log(pageRecordMap.block)

  return (
    <Layout scrollSnapMandatory={false}>
      <Section>
        <NotionClientRenderer recordMap={pageRecordMap} />
      </Section>
    </Layout>
  )
}

export default NotionPage
