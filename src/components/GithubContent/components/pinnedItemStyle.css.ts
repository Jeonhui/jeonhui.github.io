import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
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

type PrimaryLanguageColors = {
  [key in string]: {
    base: string
    hover: string
    pressed: string
  }
}
export const primaryLanguageColors: PrimaryLanguageColors = {
  red: {
    base: theme.colors.system.red.default,
    hover: theme.colors.system.red.dim,
    pressed: theme.colors.system.red.dim2,
  },
  blue: {
    base: theme.colors.text.textHighlight,
    hover: theme.colors.text.textHighlight3,
    pressed: theme.colors.text.textHighlight4,
  },
  yellow: {
    base: theme.colors.system.yellow.default,
    hover: theme.colors.system.yellow.dim,
    pressed: theme.colors.system.yellow.dim2,
  },
  green: {
    base: theme.colors.system.green.default,
    hover: theme.colors.system.green.dim,
    pressed: theme.colors.system.green.dim2,
  },
}

export const primaryLanguageColorVariants = styleVariants(
  primaryLanguageColors,
  (color, key) => ({
    [`.github-content-primary-language-${key}`]: {
      color: color.base,
    },
    [`:hover .github-content-primary-language-${key}`]: {
      color: color.hover,
    },
    [`:active .github-content-primary-language-${key}`]: {
      color: color.pressed,
    },
  }),
)

globalStyle(`${link}:hover ${tag}`, {
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.hover.border} inset`,
})

globalStyle(`${link}:active ${tag}`, {
  boxShadow: `0 0 0 0.1rem ${theme.colors.button.grayBorder.pressed.border} inset`,
})

export const star = style({
  fill: theme.colors.system.yellow.default,
  color: theme.colors.text.textDim,
})

globalStyle(`${link}:hover ${star}`, {
  fill: theme.colors.system.yellow.dim,
  color: theme.colors.text.textDim2,
})

globalStyle(`${link}:active ${star}`, {
  fill: theme.colors.system.yellow.dim2,
  color: theme.colors.text.textDim3,
})

export const animationContainer = style({
  width: `calc(50% - (${theme.spaces.medium} / 2))`,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
})
