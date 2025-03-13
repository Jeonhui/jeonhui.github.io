import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const tocItem = style({
  fontFamily: theme.fonts.base,
  ...theme.typographies.body2,
  color: theme.colors.text.textDim2,
  cursor: "pointer",
})

globalStyle(`${tocItem}:hover`, {
  color: theme.colors.text.textHighlight2,
})

globalStyle(`${tocItem}[data-active=true]`, {
  color: theme.colors.text.textHighlight,
})

globalStyle(`${tocItem}[data-active=true]:hover`, {
  color: theme.colors.text.textHighlight2,
})

globalStyle(`${tocItem}:active`, {
  color: theme.colors.text.textHighlight3,
})

globalStyle(`${tocItem}[data-active=true]:active`, {
  color: theme.colors.text.textHighlight3,
})
