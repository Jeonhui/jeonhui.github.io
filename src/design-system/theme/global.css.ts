import { globalStyle } from "@vanilla-extract/css"
import { theme } from "./theme.css"

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  transition: "background-color 0.3s ease-in-out",
})

globalStyle("body", {
  position: "relative",
  height: "100svh",
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.base,
  color: theme.colors.text.text,
})
