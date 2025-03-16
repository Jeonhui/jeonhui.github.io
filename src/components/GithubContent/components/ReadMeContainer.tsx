"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Container, Text } from "@design-system/components"
import { useIsClient } from "@design-system/hooks"
import getReadMe from "@/apis/github/graphqls/getReadMe"
import { GITHUB } from "@/constants"
import { remark } from "remark"
import remarkHtml from "remark-html"
import { clsx } from "clsx"
import * as styles from "./styles/readMeContainerStyle.css"

const ReadMeContainer = ({}) => {
  const isClient = useIsClient()
  const [readMe, setReadMe] = useState<string | undefined>(undefined)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    if (!isClient) return
    const fetchReadMe = async () => {
      await getReadMe(GITHUB.USERNAME, GITHUB.USERNAME)
        .then(async (markdownText) => {
          const htmlContent = await remark()
            .use(remarkHtml, { sanitize: false })
            .process(markdownText)
            .then((file) => String(file))
          setReadMe(htmlContent)
        })
        .catch(() => setIsError(true))
    }
    fetchReadMe()
  }, [isClient])

  return (
    <Container
      className={clsx(styles.readMeContainer, {
        [styles.readMeContainerExpanded]: isClient && (readMe || isError),
      })}
      alignment={"rowTopLeft"}
      gap={"medium"}
      layout={"fullWidth"}
    >
      {isClient && (
        <AnimatePresence>
          {isError && (
            <motion.div
              className={clsx(styles.errorAnimationContainer)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Container alignment={"columnCenter"} layout={"fullWidth"}>
                <Text typography={"display6_bold"} color={"textDim2"}>
                  ERROR
                </Text>
                <Text typography={"header6"} color={"textDim2"}>
                  데이터를 불러오는 데 문제가 발생했어요. 😢
                </Text>
              </Container>
            </motion.div>
          )}
          {!isError && readMe && (
            <motion.div
              className={clsx(styles.animationContainer)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={clsx(styles.readMeHrefContainer)}>
                <a
                  className={clsx(styles.readMeHref)}
                  href={GITHUB.USER_URL}
                  target={"_blank"}
                >
                  {GITHUB.USERNAME}
                </a>
                /
                <a
                  className={clsx(styles.readMeHref)}
                  href={`${GITHUB.USER_URL}/${GITHUB.USERNAME}/blob/main/README.md`}
                  target={"_blank"}
                >
                  README.md
                </a>
              </div>
              <hr className={clsx(styles.readMeDivider)} />
              <div
                className={clsx(styles.readMe)}
                dangerouslySetInnerHTML={{ __html: readMe }}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </Container>
  )
}

export default ReadMeContainer
