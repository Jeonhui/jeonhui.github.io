import { style } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const tocContainer = style({
  position: "relative",
  top: "30%",
  width: "100%",
  transform: "translate(0, -50%)",
  gap: theme.spaces.medium,
  ...theme.alignments.columnTopLeft,
  padding: theme.spaces.medium,
})
