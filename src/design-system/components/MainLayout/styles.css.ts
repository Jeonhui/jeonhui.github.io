import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const mainLayout = style({
  position: "relative",
  height: "100%",
  overflowY: "auto",
  ...theme.layouts.fullWidth,
  ...theme.alignments.columnTopCenter,
  scrollSnapType: "y mandatory",
  scrollBehavior: "smooth",
})

export const forScrollbar = style({
  width: 0,
  height: 0,
  zIndex: theme.zIndices.overlay,
})

globalStyle(`${mainLayout} > *`, {
  flexShrink: 0,
})
