import {
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const text = style({
  maxWidth: "100%",
})

globalStyle(`${text} > strong`, {
  fontWeight: "bold",
})

const colors = {
  ...theme.colors.text,
  inherit: undefined,
}

export const textColorVariants = styleVariants(colors, (textColor) =>
  textColor
    ? {
        color: textColor,
      }
    : {},
)

export const textFontVariants = styleVariants(theme.fonts, (font) => ({
  fontFamily: font,
}))

const textBreakpointMedia = "@media screen and (max-width: 768px)"

export const textTypographyVariants = styleVariants(
  theme.typographies,
  (typography) => ({
    ...typography,
    ...(typography[textBreakpointMedia]
      ? {
          [textBreakpointMedia]: {
            ...typography[textBreakpointMedia],
            minHeight: typography[textBreakpointMedia].lineHeight,
          },
        }
      : { minHeight: typography.lineHeight }),
  }),
)

const gradientAnimation = keyframes({
  "0%": {
    backgroundPosition: "-200% 0",
  },
  "100%": {
    backgroundPosition: "200% 0",
  },
})

export const skeleton = style({
  background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
  backgroundSize: "200% 100%",
  animation: `${gradientAnimation} 1.5s ease infinite`,
})
