import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const text = style({})

globalStyle(`${text} > <strong>`, {
  fontWeight: "bold",
})

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
