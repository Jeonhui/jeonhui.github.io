import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const mainLayout = style({
  position: "relative",
  height: "100%",
  overflowY: "auto",
  ...theme.layouts.fullWidth,
  ...theme.alignments.columnTopCenter,
  scrollSnapType: "y mandatory",
})

globalStyle(`${mainLayout} > *`, {
  flexShrink: 0,
})
