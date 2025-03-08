import { globalStyle } from "@vanilla-extract/css"
import { theme } from "./theme.css"

globalStyle("*", {
  cursor: "default",
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  transition: "color 0.3s ease-in-out, background-color 0.3s ease-in-out",
})

globalStyle("body", {
  position: "relative",
  height: "100svh",
  overflow: "hidden",
  backgroundColor: theme.colors.background,
  fontFamily: theme.fonts.base,
  color: theme.colors.text.text,
})

globalStyle("a", {
  textDecoration: "none",
})

globalStyle("svg", {
  transition: "fill 0.3s ease-in-out",
})
