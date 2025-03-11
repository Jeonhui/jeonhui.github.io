"use client"

import Image from "next/image"
import { NotionRenderer } from "react-notion-x"
import { Code } from "react-notion-x/build/third-party/code"
import { Collection } from "react-notion-x/build/third-party/collection"
import { ExtendedRecordMap } from "notion-types"
import { useIsClient, useTheme } from "@design/hooks"
import * as styles from "./notionRendererStyles.css"
import "react-notion-x/src/styles.css"

type NotionClientRendererProps = {
  recordMap: ExtendedRecordMap
}
const NotionClientRenderer = ({ recordMap }: NotionClientRendererProps) => {
  const isClient = useIsClient()
  const { theme } = useTheme()

  return isClient ? (
    <NotionRenderer
      recordMap={recordMap}
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
  )
}

export default NotionClientRenderer
