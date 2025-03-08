import { Container, GradientText, Layout, Text } from "@design/components"
import List from "@design/components/List"
import { theme } from "@design/theme/theme.css"
import React from "react"
import Section from "@design/components/Section"

export default function Home() {
  return (
    <Layout>
      <Section>
        <Container
          alignment={"columnCenterLeft"}
          gap={"xxSmall"}
          padding={"small"}
        >
          <GradientText
            deg={120}
            colors={[theme.colors.text.text, theme.colors.primary]}
            typography={"header6_bold"}
          >
            탐구하는 iOS 개발자
          </GradientText>
          <Text typography={"header1_bold"}>이전희</Text>
        </Container>
        <Text typography={"body1"} color={"textDim"}>
          적극적으로 <strong>탐구</strong>하며
          <br /> 스스로의 역량을 <strong>제고</strong>하는 개발자입니다.
        </Text>
        <List
          values={[
            "신입 iOS 개발자로서 MAU 2만 명 규모의 iOS SFOM 프로젝트를 개발 및 운영한 경험을 가지고 있습니다.",
            "사용자 경험 향상을 최우선으로 하여 최신 기술 도입과 성능 최적화 등 다양한 과제를 해결해 왔습니다.",
            "문제의 근본 원인을 분석하고 최적의 해결책을 제시함으로써 더 나은 사용자 경험을 제공하는 데 주력합니다.",
            "또한, 함께 성장하는 가치를 중요하게 여기며, 팀원들과 협력하여 최고의 결과를 만들어내는 것을 목표로 합니다.",
            "새로운 기술과 도구를 빠르게 습득하고, 창의적인 문제 해결을 통해 팀에 기여하는 데 큰 보람을 느낍니다.",
            "지속적인 성장을 추구하며, 팀원들과 긍정적인 시너지를 만들어내는 관계를 소중히 생각합니다.",
          ]}
          list={(value) => (
            <Text typography={"body3"} color={"textDim"}>
              {value}
            </Text>
          )}
        />
      </Section>
      <Section>Section2</Section>
      <Section>
        <Container
          alignment={"columnCenterLeft"}
          gap={"xxSmall"}
          padding={"small"}
        >
          <GradientText
            deg={120}
            colors={[theme.colors.text.text, theme.colors.primary]}
            typography={"header6_bold"}
          >
            탐구하는 iOS 개발자
          </GradientText>
          <Text typography={"header1_bold"}>이전희</Text>
        </Container>
        <Text typography={"body1"} color={"textDim"}>
          적극적으로 <strong>탐구</strong>하며
          <br /> 스스로의 역량을 <strong>제고</strong>하는 개발자입니다.
        </Text>
        <List
          values={[
            "신입 iOS 개발자로서 MAU 2만 명 규모의 iOS SFOM 프로젝트를 개발 및 운영한 경험을 가지고 있습니다.",
            "사용자 경험 향상을 최우선으로 하여 최신 기술 도입과 성능 최적화 등 다양한 과제를 해결해 왔습니다.",
            "문제의 근본 원인을 분석하고 최적의 해결책을 제시함으로써 더 나은 사용자 경험을 제공하는 데 주력합니다.",
            "또한, 함께 성장하는 가치를 중요하게 여기며, 팀원들과 협력하여 최고의 결과를 만들어내는 것을 목표로 합니다.",
            "새로운 기술과 도구를 빠르게 습득하고, 창의적인 문제 해결을 통해 팀에 기여하는 데 큰 보람을 느낍니다.",
            "지속적인 성장을 추구하며, 팀원들과 긍정적인 시너지를 만들어내는 관계를 소중히 생각합니다.",
          ]}
          list={(value) => (
            <Text typography={"body3"} color={"textDim"}>
              {value}
            </Text>
          )}
        />
      </Section>
    </Layout>
  )
}
