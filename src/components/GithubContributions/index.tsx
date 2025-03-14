"use client"

import { useEffect, useRef, useState } from "react"
import {
  ContributionCalendar,
  getContributions,
  getDummyContributions,
} from "@/apis/github"
import { motion } from "framer-motion"
import { Container } from "@design-system/components"
import * as styles from "@/components/GithubContributions/styles.css"
import { clsx } from "clsx"
import { GITHUB } from "@/constants"

const GithubContributions = () => {
  const dummyContributions = getDummyContributions(12)
  const [contributionCalendar, setContributionCalendar] =
    useState<ContributionCalendar | null>(null)

  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (contributionCalendar && containerRef.current) {
      const delay = 200
      const scrollContainer = containerRef.current
      const start =
        scrollContainer.scrollLeft + containerRef.current.clientWidth
      const end = scrollContainer.scrollWidth - containerRef.current.clientWidth
      const duration = 3.6
      const totalDistance = end - start
      const scrollSpeed = totalDistance / (duration * 60)
      let currentPosition = start
      setTimeout(() => {
        const scrollInterval = setInterval(() => {
          if (currentPosition < end) {
            currentPosition += scrollSpeed
            scrollContainer.scrollLeft = currentPosition
          } else {
            scrollContainer.scrollLeft = end
            clearInterval(scrollInterval)
          }
        }, 1000 / 60)
      }, delay)
    }
  }, [contributionCalendar])

  useEffect(() => {
    const today = new Date()
    const lastMonth = new Date(today)
    lastMonth.setMonth(today.getMonth() - 12)
    const fetchContributions = async () => {
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
      ref={containerRef}
      className={clsx(styles.gitContributions)}
      alignment={"rowTopLeft"}
      gap={"xxSmall"}
    >
      <Container
        className={clsx(styles.contributionContainer)}
        alignment={"rowTopLeft"}
        gap={"xxSmall"}
      >
        {(contributionCalendar ?? dummyContributions).weeks.map(
          (week, index) => (
            <motion.div key={index} className={clsx(styles.contributionWeek)}>
              {week.contributionDays.map((day, dayIndex) => (
                <motion.div
                  key={dayIndex}
                  className={clsx(styles.contributionDays)}
                  initial={{
                    backgroundColor:
                      styles.contributionDaysColors["NONE"].color,
                  }}
                  animate={{
                    backgroundColor:
                      styles.contributionDaysColors[day.contributionLevel]
                        .color,
                  }}
                  transition={{
                    delay: index * 0.005, // 순차적인 애니메이션
                  }}
                />
              ))}
            </motion.div>
          ),
        )}
      </Container>
    </Container>
  )
}

export default GithubContributions
