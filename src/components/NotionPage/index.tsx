"use client"

import "react-notion-x/src/styles.css"
import { NotionRenderer } from "react-notion-x"
import { ExtendedRecordMap } from "notion-types"
import { useEffect, useState } from "react"
import { fetchNotionPage } from "@/apis"

type NotionPageProps = {
  pageId: string
}

const NotionPage = ({ pageId }: NotionPageProps) => {
  const [recordMap, setRecordMap] = useState<ExtendedRecordMap | null>(null)

  useEffect(() => {
    fetchNotionPage(pageId).then((recordMap) => setRecordMap(recordMap))
  }, [pageId])

  return recordMap != null ? (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
  ) : (
    <div></div>
  )
}

export default NotionPage
