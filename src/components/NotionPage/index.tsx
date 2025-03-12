"use client"

import { useEffect, useState } from "react"
import { ExtendedRecordMap } from "notion-types"

import { useIsClient, useTheme } from "@design/hooks"
import { NotionRenderer } from "react-notion-x"
import { getPage } from "@/apis/notions"
import { Layout, Section } from "@design/components"
import * as styles from "./styles/styles.css"
import "./styles/reactNotionXStyles.css"

import Image from "next/image"
import { Code } from "react-notion-x/build/third-party/code"
import { Collection } from "react-notion-x/build/third-party/collection"

type NotionPageProps = {
  pageId: string
}

const NotionPage = ({ pageId }: NotionPageProps) => {
  const isClient = useIsClient()
  const { theme } = useTheme()
  const [pageRecordMap, setPageRecordMap] = useState<ExtendedRecordMap | null>(
    null,
  )

  useEffect(() => {
    const fetchPageRecordMap = async () => {
      setPageRecordMap(await getPage(pageId))
    }
    fetchPageRecordMap()
  }, [pageId])

  return (
    <Layout scrollSnapMandatory={false}>
      <Section>
        {isClient && pageRecordMap != null ? (
          <NotionRenderer
            recordMap={pageRecordMap}
            className={styles.notionRenderer}
            components={{
              nextImage: Image,
              Code: Code,
              Collection: Collection,
            }}
            fullPage={true}
            darkMode={theme == "dark"}
            disableHeader
          />
        ) : (
          <div>Loading...</div>
        )}
      </Section>
    </Layout>
  )
}

export default NotionPage
