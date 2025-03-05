import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const mainLayout = style({
  position: "relative",
  ...theme.layouts.fullWidth,
  minHeight: "100svh",
  ...theme.alignments.columnTopCenter,
})

globalStyle(`${mainLayout} > *`, {
  flexShrink: 0,
})
