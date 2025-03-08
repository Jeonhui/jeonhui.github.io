import {
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const maxWidth = theme.breakpoints.medium.width

export const layout = style({
  width: "100%",
  minHeight: "100svh",
  maxWidth: maxWidth,
})

globalStyle(`${layout} > *`, {
  flexShrink: 0,
})

export const layoutAlignmentVariants = styleVariants(
  theme.alignments,
  (alignment) => alignment,
)

export const layoutGapVariants = styleVariants(theme.spaces, (space) =>
  space === "0"
    ? {}
    : {
        gap: space,
      },
)

export const layoutVerticalPaddingVariants = styleVariants(
  theme.spaces,
  (space) =>
    space === "0"
      ? {}
      : {
          "&[data-has-header-padding=true]": {
            paddingTop: `calc(${space} + 3rem)`,
          },
          paddingTop: `${space}`,
          paddingBottom: space,
        },
)

export const layoutHorizontalPaddingVariants = styleVariants(
  theme.spaces,
  (space) =>
    space === "0"
      ? {}
      : {
          paddingLeft: space,
          paddingRight: space,
        },
)

// animation
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
