import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const text = style({})

export const textColorVariants = styleVariants(
  theme.colors.text,
  (textColor) => ({
    color: textColor,
  }),
)

export const textFontVariants = styleVariants(theme.fonts, (font) => ({
  fontFamily: font,
}))

export const textTypographyVariants = styleVariants(
  theme.typographies,
  (typography) => ({
    ...typography,
  }),
)
