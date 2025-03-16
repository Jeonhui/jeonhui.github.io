"use client"

import React, { JSX, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { clsx } from "clsx"
import { Container, Text } from "@design-system/components"
import ItemContainer from "../../ItemContainer"
import { useIsClient } from "@design-system/hooks"
import * as commonStyles from "./commonStyles.css"
import getReadMe from "@/apis/github/graphqls/getReadMe"
import { GITHUB } from "@/constants"
import { MDXProps } from "mdx/types"
import { compile } from "@mdx-js/mdx"

async function convertMarkdownToMDX(
  md: string,
): Promise<(props: MDXProps) => JSX.Element> {
  const compiled = await compile(md, { outputFormat: "function-body" })
  // 동적으로 MDX 컴포넌트를 생성
  const Component = new Function(
    "React",
    `${String(compiled)}; return MDXContent;`,
  )(React)
  // eslint-disable-next-line react/display-name
  return (props: MDXProps) => <Component {...props} />
}

const ReadMeContainer = ({}) => {
  const isClient = useIsClient()
  const [readMe, setReadMe] = useState<
    ((props: MDXProps) => JSX.Element) | undefined
  >(undefined)

  useEffect(() => {
    if (!isClient) return
    const fetchReadMe = async () => {
      await getReadMe(GITHUB.USERNAME, GITHUB.USERNAME)
        .then(convertMarkdownToMDX)
        .then(setReadMe)
    }
    fetchReadMe()
  }, [isClient])

  return (
    <ItemContainer title={"Pinned"} titleSize={"xSmall"} hasMarginTop={false}>
      {
        <Container
          className={commonStyles.pinnedItemContainer}
          alignment={"rowTopLeft"}
          gap={"medium"}
          layout={"fullWidth"}
        >
          {isClient && (
            <AnimatePresence>
              {readMe && readMe.length == 0 && (
                <motion.div
                  className={clsx(commonStyles.errorAnimationContainer)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Container
                    className={clsx(commonStyles.errorContainer)}
                    alignment={"columnCenter"}
                    layout={"fullWidth"}
                  >
                    <Text typography={"display6_bold"} color={"textDim2"}>
                      ERROR
                    </Text>
                    <Text typography={"header6"} color={"textDim2"}>
                      데이터를 불러오는 데 문제가 발생했어요. 😢
                    </Text>
                  </Container>
                </motion.div>
              )}

              {readMe && readMe({})}
            </AnimatePresence>
          )}
        </Container>
      }
    </ItemContainer>
  )
}

export default ReadMeContainer
