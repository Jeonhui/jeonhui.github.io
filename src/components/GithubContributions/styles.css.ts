import { globalStyle, style } from "@vanilla-extract/css"
import { ContributionLevel } from "@/apis/github"
import { Property } from "csstype"
import { theme } from "@design-system/theme/theme.css"
import Color = Property.Color

const daySize = "0.5rem"

export const gitContributions = style({
  maxWidth: "100%",
  overflowX: "auto",
  scrollBehavior: "smooth",
  "::-webkit-scrollbar": {
    display: "none",
  },
})

export const contributionContainer = style({
  height: `calc(${daySize} * 7 + ${theme.spaces.xxSmall} * 6)`,
})

export const contributionWeek = style({
  ...theme.alignments.columnTopCenter,
  height: "100%",
  gap: theme.spaces.xxSmall,
})

globalStyle(`${contributionContainer} > ${contributionWeek}:nth-child(1)`, {
  ...theme.alignments.columnBottomCenter,
})

export const contributionDays = style({
  height: daySize,
  aspectRatio: "1",
  borderRadius: "2px",
})

type ContributionDaysColors = {
  [key in ContributionLevel]: { color: Color }
}

export const contributionDaysColors: ContributionDaysColors = {
  NONE: { color: theme.colors.text.textDim4 },
  FIRST_QUARTILE: { color: theme.colors.text.textHighlight },
  SECOND_QUARTILE: { color: theme.colors.text.textHighlight2 },
  THIRD_QUARTILE: { color: theme.colors.text.textHighlight3 },
  FOURTH_QUARTILE: { color: theme.colors.text.textHighlight4 },
}
