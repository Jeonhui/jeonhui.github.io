import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const linkContainer = style({
  width: "100%",
})

export const link = style({
  borderRadius: `${theme.spaces.small} !important`,
})

globalStyle(`${link} *`, {
  transition: "none !important",
})

export const tagContainer = style({
  height: "2rem",
  paddingTop: `${theme.spaces.small}`,
})

export const tag = style({
  fontFamily: `${theme.fonts.code}`,
  ...theme.typographies.body5,
  color: `${theme.colors.text.textHighlight}`,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.default.border} inset`,
  padding: `${theme.spaces.xSmall} ${theme.spaces.small}`,
  borderRadius: `${theme.spaces.medium}`,
})

globalStyle(`${link}:hover ${tag}`, {
  color: `${theme.colors.text.textHighlight3}`,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.hover.border} inset`,
})

globalStyle(`${link}:active ${tag}`, {
  color: `${theme.colors.text.textHighlight4}`,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.pressed.border} inset`,
})
