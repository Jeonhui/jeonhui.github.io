import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const sidebarBreakpoint = theme.breakpoints.xLarge
export const layoutContentBreakpoint = theme.breakpoints.medium
export const headerHeight = "4rem"

export const layout = style({
  width: "100%",
  height: "100svh",
  overflowY: "auto",
  scrollBehavior: "smooth",
  ...theme.alignments.rowTopCenter,
})

globalStyle(`${layout}[data-scroll-snap-mandatory=true]`, {
  scrollSnapType: "y mandatory",
})

export const layoutContent = style({
  width: "100%",
  maxWidth: layoutContentBreakpoint.width,
  flexShrink: 0,
})

export const layoutContentAlignmentVariants = styleVariants(
  theme.alignments,
  (alignment) => alignment,
)

export const layoutContentGapVariants = styleVariants(
  theme.spaces,
  (space) => ({
    gap: space,
  }),
)

export const forScrollbar = style({
  width: 0,
  height: 0,
  zIndex: theme.zIndices.overlay,
})

export const sidebar = style({
  flexGrow: 1,
  height: "100%",
  "@media": {
    [sidebarBreakpoint.media]: {
      display: "none",
    },
  },
})
