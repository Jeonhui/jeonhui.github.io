import { NotionPage } from "@/components"
import { METADATA, NOTIONS } from "@/constants"
import type { Metadata } from "next"

export const metadata: Metadata = METADATA.PORTFOLIO

const Portfolio = () => {
  return (
    <NotionPage
      pageId={NOTIONS.PORTFOLIO.PAGE_ID}
      origin={NOTIONS.PORTFOLIO.URL}
    />
  )
}

export default Portfolio
