"use client"

import { ExtendedRecordMap } from "notion-types"
import { useEffect, useRef, useState } from "react"
import * as styles from "./tocStyles.css"
import TocItem, { TocItemValue } from "./TocItem"

const tocTypes = new Set([
  "page",
  "column_list",
  "column",
  "header",
  "sub_header",
])

type NotionToc = {
  id: string
  type: string
  parentId: string
  value: string
  content?: string[]
  children: NotionToc[]
}

const recordMapToToc = (
  pageId: string,
  recordMap: ExtendedRecordMap,
): (TocItemValue | TocItemValue[])[] => {
  const blockMap = new Map<string, NotionToc>(
    Object.entries(recordMap.block)
      .filter(([, block]) => tocTypes.has(block.value.type))
      .map<[string, NotionToc]>(([, block]) => {
        const id = block.value.id.replace(/-/g, "")
        return [
          id,
          {
            id: id,
            type: block.value.type,
            parentId: block.value.parent_id.replace(/-/g, ""),
            value: block.value.properties?.title?.[0]?.[0],
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
  if (rootBlocks === null) return []

  const root: NotionToc = rootBlocks as NotionToc

  const toSimpleNotionToc = (
    value: NotionToc,
  ): TocItemValue | TocItemValue[] => {
    if (value.type === "column_list") {
      return value.children
        .filter((column) => column.type === "column")
        .map((column) =>
          column.children
            .filter((header) => header.type.includes("header"))
            .map((header) => ({
              id: header.id,
              type: header.type,
              value: header.value,
            })),
        )
        .flat()
    }
    return {
      id: value.id,
      type: value.type,
      value: value.value,
    }
  }
  return root.children.map(toSimpleNotionToc)
}

type NotionTocProps = {
  pageId: string
  recordMap: ExtendedRecordMap | null
}

const NotionToc = ({ pageId, recordMap }: NotionTocProps) => {
  const [toc, setToc] = useState<TocItemValue[] | null>(null)
  const [currentTocItemId, setCurrentTocItemId] = useState<string | null>(null)
  const [tocElements, setTocElements] = useState<HTMLElement[]>([])
  const mutationObserverRef = useRef<MutationObserver | null>(null)
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (recordMap !== null) {
      const toc = recordMapToToc(pageId, recordMap).map((value) =>
        Array.isArray(value)
          ? {
              id: value?.[0].id,
              type: value?.[0].type,
              value: value.map((item) => item.value).join(" & "),
            }
          : value,
      )
      setToc(toc)
    }
  }, [pageId, recordMap])

  useEffect(() => {
    if (!recordMap) return

    const updateTocElements = () => {
      const headers = (toc?.map((toc: TocItemValue) =>
        document.getElementById(toc.id),
      ) ?? []) as HTMLElement[]
      setTocElements(headers)
    }
    mutationObserverRef.current = new MutationObserver(() =>
      updateTocElements(),
    )
    const notionContent = document.querySelector(".notion-renderer")
    if (notionContent) {
      mutationObserverRef.current.observe(notionContent, {
        childList: true,
        subtree: true,
      })
    }
    updateTocElements() // 초기 실행
    return () => mutationObserverRef.current?.disconnect()
  }, [recordMap, toc])

  useEffect(() => {
    if (tocElements.length === 0) return
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let lastVisibleId = currentTocItemId
      entries.forEach((entry) => {
        if (entry.isIntersecting) lastVisibleId = entry.target.id
      })
      if (lastVisibleId) setCurrentTocItemId(lastVisibleId)
    }
    intersectionObserverRef.current = new IntersectionObserver(
      handleIntersect,
      {
        rootMargin: "0px 0px -85% 0px",
        threshold: 0,
      },
    )

    tocElements.forEach((el) => intersectionObserverRef.current?.observe(el))

    return () => intersectionObserverRef.current?.disconnect()
  }, [tocElements, currentTocItemId])

  return (
    <div className={styles.tocContainer}>
      {toc?.map((value, idx) => (
        <TocItem
          key={idx}
          value={value}
          isActive={value.id == currentTocItemId}
        />
      ))}
    </div>
  )
}

export default NotionToc
