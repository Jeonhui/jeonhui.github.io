import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const itemContainer = style({
  marginTop: "6rem",
})

export const itemTitle = style({
  fill: theme.colors.text.textDim,
  verticalAlign: "bottom",
})

globalStyle(`${itemTitle} svg`, {
  aspectRatio: "1",
})

const textBreakpointMedia = "@media screen and (max-width: 768px)"

const titleSizes = {
  small: {
    height: "1.75rem",
    " svg": {
      height: "1.5rem",
    },
    [textBreakpointMedia]: {
      height: "1.5rem",
      " svg": {
        height: "1.3rem",
      },
    },
  },
  medium: {
    height: "2rem",
    " svg": {
      height: "1.6rem",
    },
    [textBreakpointMedia]: {
      height: "1.5rem",
      " svg": {
        height: "1.3rem",
      },
    },
  },
  large: {
    height: "2.25rem",
    " svg": {
      height: "2rem",
    },
    [textBreakpointMedia]: {
      height: "2rem",
      " svg": {
        height: "1.8rem",
      },
    },
  },
}

export const itemTitleSizeVariants = styleVariants(titleSizes, (size) => size)
