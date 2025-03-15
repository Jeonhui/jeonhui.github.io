import { globalStyle, style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const loading = style({
  position: "absolute",
  paddingTop: "5rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const loadingContainer = style({
  position: "relative",
  width: "14rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
})

export const loadingDot = style({
  display: "block",
  width: "1rem",
  height: "1rem",
  borderRadius: "50%",
  background: `linear-gradient(120deg, ${theme.colors.gradient.primaryStart} 0%, ${theme.colors.gradient.end} 100%)`,
  backgroundSize: "14rem 5rem",
})

for (let i = 1; i <= 5; i++) {
  globalStyle(`${loadingContainer} > ${loadingDot}:nth-child(${i})`, {
    vars: { "--index": `${i}` },
  })
}

globalStyle(`${loadingContainer} > *`, {
  vars: {
    "--index": "1",
  },
  backgroundPosition: "calc((14rem / 5) * var(--index) - 1rem)",
})
