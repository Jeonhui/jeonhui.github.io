import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const button = style({
  height: "40px",
  width: "100px",
  cursor: "pointer",
  ...theme.alignments.rowCenter,
})

export const buttonColorVariants = styleVariants(
  theme.colors.button,
  (color) => ({
    fill: color.default.icon,
    color: color.default.text,
    backgroundColor: color.default.background,
    border: color.default.border,
    ":hover": {
      fill: color.hover.icon,
      color: color.hover.text,
      backgroundColor: color.hover.background,
      border: color.hover.border,
    },
    ":active": {
      fill: color.pressed.icon,
      color: color.pressed.text,
      backgroundColor: color.pressed.background,
      border: color.pressed.border,
    },
    ":disabled": {
      fill: color.disabled.icon,
      color: color.disabled.text,
      backgroundColor: color.disabled.background,
      border: color.disabled.border,
    },
  }),
)
