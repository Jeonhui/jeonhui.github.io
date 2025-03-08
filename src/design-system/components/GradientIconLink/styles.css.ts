import { globalStyle, style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const gradientLink = style({
  cursor: "pointer",
})

export const gradientIcon = style({
  transition: "background-position 1s ease-in-out",
  backgroundSize: "200% 200%",
})

globalStyle(`${gradientLink}:not(:disabled) *`, {
  cursor: "pointer",
})

export const linkSizeVariants = styleVariants(theme.boxSizes, (size) => ({
  ...size,
  "> div": {
    height: size.lineHeight,
    aspectRatio: "1",
  },
}))

export const gradientIconInvisible = style({
  backgroundPosition: "100% 50%",
})

export const gradientIconVisible = style({
  backgroundPosition: "0% 0%",
})

globalStyle(`${gradientLink}:hover ${gradientIcon}`, {
  backgroundPosition: "100% 50%",
})
