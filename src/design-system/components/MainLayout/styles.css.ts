import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const mainLayout = style({
  position: "relative",
  minHeight: "100svh",
  ...theme.layouts.fullWidth,
  ...theme.alignments.columnTopCenter,
})

globalStyle(`${mainLayout} > *`, {
  flexShrink: 0,
})
