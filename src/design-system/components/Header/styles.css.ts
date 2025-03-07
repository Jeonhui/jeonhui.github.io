import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

const maxWidth = theme.breakpoints.xLarge.width

const breakpoints = theme.breakpoints.medium

export const headerContainer = style({
  position: "fixed",
  maxWidth: maxWidth,
  backdropFilter: "blur(32px)",
  zIndex: theme.zIndices.modal,
})

export const header = style({
  height: "3rem",
  padding: `${theme.spaces.small} ${theme.spaces.xLarge}`,
  "@media": {
    [breakpoints.media]: {
      padding: `${theme.spaces.xSmall} ${theme.spaces.small}`,
    },
  },
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

globalStyle(`${header} [header-item=true] > [data-media-hidden-item=true]`, {
  "@media": {
    [breakpoints.media]: {
      display: "none",
    },
  },
})

globalStyle(`${header} [header-item=true] > [data-media-show-item]`, {
  display: "none",
  "@media": {
    [breakpoints.media]: {
      display: "flex",
    },
  },
})

globalStyle(`${headerContainer} [header-menu-item=true]`, {
  overflow: "hidden",
  maxHeight: 0,
  padding: `0 ${theme.spaces.medium}`,
  transition: "max-height 0.4s ease-in-out, padding 0.4s ease-in-out",
  "@media": {
    [`screen and (min-width: ${breakpoints.width})`]: {
      display: "none",
    },
  },
})

globalStyle(
  `${headerContainer} [header-menu-item=true][header-menu-item-open=true]`,
  {
    maxHeight: "500px",
    padding: `${theme.spaces.medium} ${theme.spaces.medium}`,
  },
)
