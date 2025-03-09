import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const breakpoints = theme.breakpoints.medium

export const layout = style({
  width: "100%",
  minHeight: "100svh",
  maxWidth: breakpoints.width,
  padding: `0 ${theme.spaces.xLarge}`,
  "@media": {
    [breakpoints.media]: {
      padding: `0 ${theme.spaces.medium}`,
    },
  },
})

globalStyle(`${layout} > *`, {
  flexShrink: 0,
})

export const layoutAlignmentVariants = styleVariants(
  theme.alignments,
  (alignment) => alignment,
)
