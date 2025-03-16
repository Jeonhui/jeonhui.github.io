import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "@design-system/theme/theme.css"

export const itemContainerMarginTop = style({
  marginTop: "6rem",
})

export const itemTitleLink = style({
  cursor: "pointer",
})

globalStyle(`${itemTitleLink} *`, {
  cursor: "pointer",
  transition: "none !important",
})

globalStyle(`${itemTitleLink}:hover *`, {
  fill: `${theme.colors.text.textDim2} !important`,
  color: `${theme.colors.text.textDim2} !important`,
})

globalStyle(`${itemTitleLink}:active *`, {
  fill: `${theme.colors.text.textDim3} !important`,
  color: `${theme.colors.text.textDim3} !important`,
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
  xSmall: {
    height: "1.6rem",
    " svg": {
      height: "1.4rem",
    },
    [textBreakpointMedia]: {
      height: "1.25rem",
      " svg": {
        height: "1rem",
      },
    },
  },
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
