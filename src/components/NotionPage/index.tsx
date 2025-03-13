"use client"

import { useEffect, useState } from "react"
import { ExtendedRecordMap } from "notion-types"

import { useIsClient, useTheme } from "@design-system/hooks"
import { NotionRenderer } from "react-notion-x"
import { getPage } from "@/apis/notions"
import { Layout, Section } from "@design-system/components"
import * as styles from "./styles/styles.css"
import "./styles/reactNotionXStyles.css"

import Image from "next/image"
import { Code } from "react-notion-x/build/third-party/code"
import { Collection } from "react-notion-x/build/third-party/collection"

const allowedTypes = new Set([
  "page",
  "column_list",
  "column",
  "header",
  "sub_header",
  "sub_sub_header",
])

type NotionToc = {
  id: string
  type: string
  parentId: string
  value: string
  content?: string[]
  children: NotionToc[]
}

type NotionPageProps = {
  pageId: string
}

const NotionPage = ({ pageId }: NotionPageProps) => {
  const isClient = useIsClient()
  const { theme } = useTheme()
  const [pageRecordMap, setPageRecordMap] = useState<ExtendedRecordMap | null>(
    null,
  )

  const createToc = (recordMap: ExtendedRecordMap) => {
    const blockMap = new Map<string, NotionToc>(
      Object.entries(recordMap.block)
        .filter(([, block]) => allowedTypes.has(block.value.type))
        .map<[string, NotionToc]>(([, block]) => {
          const id = block.value.id.replace(/-/g, "")
          return [
            id,
            {
              id: id,
              type: block.value.type,
              parentId: block.value.parent_id.replace(/-/g, ""),
              value: block.value.properties?.title,
              content: block.value.content,
              children: [],
            },
          ]
        }),
    )

    let rootBlocks: NotionToc | null = null

    blockMap.forEach((block) => {
      if (block.id === pageId) {
        rootBlocks = block
      } else {
        const parentBlock = blockMap.get(block.parentId)

        if (parentBlock) {
          const children = blockMap.get(block.id)
          if (children !== undefined) parentBlock.children.push(children)
        }
      }
    })

    console.log("toc", rootBlocks)
  }

  useEffect(() => {
    const fetchPageRecordMap = async () => {
      const fetchedRecordMap = await getPage(pageId)
      createToc(fetchedRecordMap)
      setPageRecordMap(fetchedRecordMap)
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
