import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const link = style({
  overflow: "hidden",
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
  ...theme.alignments.rowTopCenter,
  gap: theme.spaces.xxSmall,
  fontFamily: `${theme.fonts.code}`,
  ...theme.typographies.body5,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.default.border} inset`,
  padding: `${theme.spaces.xSmall} ${theme.spaces.small}`,
  borderRadius: `${theme.spaces.medium}`,
})

globalStyle(`${tag} > svg`, {
  height: theme.typographies.body5.lineHeight,
  aspectRatio: "1",
})

globalStyle(`${link}:hover ${tag}`, {
  fill: `${theme.colors.text.textHighlight3}`,
  color: `${theme.colors.text.textHighlight3}`,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.hover.border} inset`,
})

globalStyle(`${link}:active ${tag}`, {
  color: `${theme.colors.text.textHighlight4}`,
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.pressed.border} inset`,
})

export const animationContainer = style({
  width: `calc(50% - (${theme.spaces.medium} / 2))`,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
})
