import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "@design/theme/theme.css"

export const header = style({
  position: "fixed",
  ...theme.layouts.fullWidth,
  ...theme.alignments.rowCenter,
  padding: `${theme.spaces.small} ${theme.spaces.xLarge}`,
  backdropFilter: "blur(10px)",
})

globalStyle(`${header} > svg`, {
  fill: theme.colors.logo,
  width: "2rem",
  aspectRatio: "1",
})

globalStyle(`${header} [header-item=true]`, {
  flex: 1,
  ...theme.alignments.rowCenterRight,
})
