import { style } from "@vanilla-extract/css"
import { theme } from "@/design-system/theme/theme.css"

export const mainLayout = style({
  ...theme.alignments.columnCenter,
})
