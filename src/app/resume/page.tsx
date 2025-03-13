import { NotionPage } from "@/components"
import { METADATA, NOTIONS } from "@/constants"
import type { Metadata } from "next"

export const metadata: Metadata = METADATA.RESUME

const Resume = () => {
  return (
    <NotionPage pageId={NOTIONS.RESUME.PAGE_ID} origin={NOTIONS.RESUME.URL} />
  )
}

export default Resume
