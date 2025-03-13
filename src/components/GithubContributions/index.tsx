"use client"

import { useEffect, useState } from "react"
import { GITHUB } from "@/constants"
import getContributions, {
  ContributionCalendar,
} from "@/apis/github/graphqls/getContributions"
import { Container } from "@design-system/components"

const GithubContributions = () => {
  const [contributionCalendar, setContributionCalendar] =
    useState<ContributionCalendar | null>(null)

  useEffect(() => {
    const fetchContributions = async () => {
      const today = new Date()
      const lastMonth = new Date(today)
      lastMonth.setMonth(today.getMonth() - 12)

      await getContributions(
        GITHUB.USERNAME,
        lastMonth.toISOString(),
        today.toISOString(),
      ).then(setContributionCalendar)
    }
    fetchContributions()
  }, [])

  return (
    <Container
      style={{
        width: "100%",
        overflowX: "auto",
      }}
      alignment={"rowTopLeft"}
      gap={"xxSmall"}
    >
      {contributionCalendar?.weeks.map((week, index) => (
        <Container key={index} alignment={"columnTopCenter"} gap={"xxSmall"}>
          {week.contributionDays.map((day, index) => (
            <div
              key={index}
              style={{
                width: "0.4rem",
                height: "0.4rem",
                backgroundColor: day.color,
                borderRadius: "2px",
              }}
            />
          ))}
        </Container>
      ))}
    </Container>
  )
}

export default GithubContributions
