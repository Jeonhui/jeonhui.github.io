"use client"

import React, { useEffect, useState } from "react"
import { ExtendedRecordMap } from "notion-types"

import { useIsClient, useTheme } from "@design-system/hooks"
import { NotionRenderer } from "react-notion-x"
import {
  Container,
  Layout,
  Link,
  Loading,
  Section,
  Text,
} from "@design-system/components"
import NotionToc from "./components/NotionToc"
import * as styles from "./styles/styles.css"
import "./styles/reactNotionXStyles.css"

import Image from "next/image"
import { Code } from "react-notion-x/build/third-party/code"
import { Collection } from "react-notion-x/build/third-party/collection"
import { getPage } from "@/apis/notions"
import { motion } from "framer-motion"

type NotionPageProps = {
  pageId: string
  origin: string
}

const NotionPage = ({ pageId, origin }: NotionPageProps) => {
  const isClient = useIsClient()
  const { theme } = useTheme()
  const [pageRecordMap, setPageRecordMap] = useState<ExtendedRecordMap | null>(
    null,
  )
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchPageRecordMap = async () => {
      await getPage(pageId)
        .then((res) => setPageRecordMap(res))
        .catch(() => setIsError(true))
    }
    fetchPageRecordMap()
  }, [pageId])

  return (
    <Layout
      layoutClassName={styles.layout}
      scrollSnapMandatory={false}
      rightSidebar={<NotionToc pageId={pageId} recordMap={pageRecordMap} />}
    >
      <Section>
        <Loading isLoading={!(pageRecordMap != null || isError)} />
        {isClient && pageRecordMap != null && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
        {isClient && isError && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container
              gap={"large"}
              style={{ width: "100%", marginTop: "10rem" }}
            >
              <Container alignment={"columnCenter"}>
                <Text typography={"display1_bold"} color={"text"}>
                  ERROR
                </Text>
                <Text typography={"header6"} color={"text"}>
                  노션을 불러오는 데 문제가 발생했어요. 😢
                </Text>
              </Container>
              <Link target={"_blank"} size={"xSmall"} href={origin}>
                노션으로 보기
              </Link>
            </Container>
          </motion.div>
        )}
      </Section>
    </Layout>
  )
}

export default NotionPage
