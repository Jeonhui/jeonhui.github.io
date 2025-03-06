import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const layout = style({
  width: "100%",
  minHeight: "100svh",
  maxWidth: theme.breakpoints.medium.width,
})

globalStyle(`${layout} > *`, {
  flexShrink: 0,
})

export const layoutAlignmentVariants = styleVariants(
  theme.alignments,
  (alignment) => alignment,
)

export const layoutGapVariants = styleVariants(theme.spaces, (space) => ({
  gap: space,
}))

export const layoutVerticalPaddingVariants = styleVariants(
  theme.spaces,
  (space) => ({
    paddingTop: space,
    paddingBottom: space,
  }),
)

export const layoutHorizontalPaddingVariants = styleVariants(
  theme.spaces,
  (space) => ({
    paddingLeft: space,
    paddingRight: space,
  }),
)
