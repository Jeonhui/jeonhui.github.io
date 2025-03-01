import { style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const mainLayout = style({
  ...theme.layouts.fullScreen,
  ...theme.alignments.columnTopCenter,
})
