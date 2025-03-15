import { style } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const contentContainer = style({
  flexWrap: "wrap",
  minHeight: "21rem",
})

export const errorAnimationContainer = style({
  position: "absolute",
  width: "100%",
})

export const errorContainer = style({
  ...theme.boxSizes.large_full,
  padding: `${theme.spaces.medium} ${theme.spaces.large}`,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.default.border} inset`,
})
