import React from "react"
import {
  Container,
  GradientText,
  Layout,
  Section,
  Text,
} from "@design-system/components"
import {
  BlogContent,
  ContactContent,
  DownloadsAndLinksContent,
  GithubContent,
  GithubContributions,
} from "@/components"
import { downloadLinks, linkItems } from "@/data"
import contactItems from "@/data/contactItems"

export default function Home() {
  return (
    <Layout>
      <Section>
        <Container
          alignment={"columnCenterLeft"}
          gap={"xxSmall"}
          padding={"none"}
        >
          <GradientText typography={"header6_bold"}>
            탐구하는 iOS 개발자
          </GradientText>
          <Text typography={"header1_bold"}>이전희</Text>
        </Container>
        <Container>
          <Text typography={"body1"} color={"textDim"}>
            적극적으로 <strong>탐구</strong>하며
            <br /> 스스로의 역량을 <strong>제고</strong>하는 개발자입니다.
          </Text>
        </Container>
        <GithubContributions />
        <GithubContent />
        <BlogContent />
        <ContactContent contactItems={[contactItems.gmail]} />
        <DownloadsAndLinksContent
          linkItems={linkItems}
          downloadItems={[downloadLinks.resume, downloadLinks.portfolio]}
        />
      </Section>
    </Layout>
  )
}
