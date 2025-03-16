import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const errorAnimationContainer = style({
  width: "100%",
})

export const readMeContainer = style({
  ...theme.boxSizes.xSmall,
  borderRadius: theme.spaces.small,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.default.border} inset`,
  minHeight: "4rem",
  overflow: "hidden",
  maxHeight: "4rem",
  transition: "max-height 1s ease-in-out",
})

export const readMeContainerExpanded = style({
  maxHeight: "40rem !important",
})

export const animationContainer = style({
  ...theme.alignments.columnTopLeft,
  width: "100%",
  padding: `${theme.spaces.small} ${theme.spaces.small}`,
})

export const readMe = style({
  fontFamily: theme.fonts.base,
  color: theme.colors.text.textDim,
})

export const readMeHrefContainer = style({
  ...theme.alignments.rowCenterLeft,
  gap: theme.spaces.xxSmall,
  ...theme.typographies.body4,
  color: theme.colors.text.textDim,
})

export const readMeHref = style({
  color: theme.colors.text.textDim2,
})

globalStyle(`${readMeHref}:hover`, {
  color: theme.colors.text.textDim3,
})

globalStyle(`${readMeHref}:active`, {
  color: theme.colors.text.textDim4,
})

export const readMeDivider = style({
  height: "1px",
  border: "none",
  backgroundColor: theme.colors.text.textDim4,
  margin: `${theme.spaces.xSmall} 0 ${theme.spaces.xSmall} 0`,
  width: "100%",
})

globalStyle(`${readMe} h1`, {
  margin: `${theme.spaces.medium} 0`,
  ...theme.typographies.header5_bold,
  ...theme.typographies.body2,
})

globalStyle(`${readMe} h2`, {
  margin: `${theme.spaces.small} 0`,
  ...theme.typographies.header6_bold,
})

globalStyle(`${readMe} h3`, {
  margin: `${theme.spaces.small} 0`,
  ...theme.typographies.body2,
  fontWeight: "bold",
})

globalStyle(`${readMe} h4`, {
  color: theme.colors.text.textDim2,
  margin: `${theme.spaces.small} 0`,
  ...theme.typographies.body3,
  fontWeight: "bold",
})

globalStyle(`${readMe} h5`, {
  color: theme.colors.text.textDim2,
  margin: `${theme.spaces.xSmall} 0`,
  ...theme.typographies.body4,
  fontWeight: "bold",
})

globalStyle(`${readMe} h6`, {
  color: theme.colors.text.textDim2,
  margin: `${theme.spaces.xxSmall} 0 ${theme.spaces.medium} 0`,
  ...theme.typographies.body5,
  fontWeight: "bold",
})

globalStyle(`${readMe} p`, {
  marginBottom: theme.spaces.small,
})

globalStyle(`${readMe} a`, {
  cursor: "pointer",
  color: theme.colors.text.textHighlight,
})

globalStyle(`${readMe} a *`, {
  transition: "none !important",
  cursor: "pointer",
})

globalStyle(`${readMe} a:hover`, {
  color: theme.colors.text.textHighlight3,
})

globalStyle(`${readMe} a:active`, {
  color: theme.colors.text.textHighlight4,
})
