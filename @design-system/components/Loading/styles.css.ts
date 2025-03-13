import { style } from "@vanilla-extract/css"
import { theme } from "../../theme/theme.css"

export const loading = style({
  paddingTop: "5rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const loadingContainer = style({
  width: "14rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
})

export const loadingDot = style({
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: theme.colors.text.textDim2,
  borderRadius: "50%",
})
