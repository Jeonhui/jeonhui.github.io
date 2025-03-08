import {
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const maxWidth = theme.breakpoints.medium.width

export const section = style({
  scrollSnapAlign: "start",
  width: "100%",
  minHeight: "100svh",
})

globalStyle(`${section} > *`, {
  flexShrink: 0,
})

export const sectionAlignmentVariants = styleVariants(
  theme.alignments,
  (alignment) => alignment,
)

export const sectionGapVariants = styleVariants(theme.spaces, (space) =>
  space === "0"
    ? {}
    : {
        gap: space,
      },
)

export const sectionVerticalPaddingVariants = styleVariants(
  theme.spaces,
  (space) =>
    space === "0"
      ? {
          "&[data-has-header-padding=true]": {
            paddingTop: `4rem`,
          },
        }
      : {
          "&[data-has-header-padding=true]": {
            paddingTop: `calc(${space} + 4rem)`,
          },
          paddingTop: `${space}`,
          paddingBottom: space,
        },
)

export const sectionHorizontalPaddingVariants = styleVariants(
  theme.spaces,
  (space) =>
    space === "0"
      ? {}
      : {
          paddingLeft: space,
          paddingRight: space,
        },
)

const enter = keyframes({
  "0%": { opacity: "0", transform: "translateY(4rem)" },
  "100%": { opacity: "1", transform: "none" },
})

globalStyle("[data-animate=true] > *", {
  vars: {
    "--step": "0",
    "--delayPerStep": "120ms",
    "--start": "0ms",
  },
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      animation: `${enter} 0.5s both`,
      animationDelay: "calc(var(--step) * var(--delayPerStep) + var(--start))",
    },
  },
})

for (let i = 1; i <= 20; i++) {
  globalStyle(`[data-animate=true] > *:nth-child(${i})`, {
    vars: { "--step": `${i}` },
  })
}
