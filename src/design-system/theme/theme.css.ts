import { createGlobalTheme } from "@vanilla-extract/css"
import {
  alignmentTheme,
  breakpointTheme,
  colorSetVars,
  colorTheme,
  fontTheme,
  spaceTheme,
  typographyTheme,
  zIndexTheme,
} from "./themes/index.css"

const globalColorThemeVars = createGlobalTheme(":root", colorTheme)

const theme = {
  colors: globalColorThemeVars,
  colorSet: colorSetVars,
  fonts: fontTheme,
  typographies: typographyTheme,
  alignments: alignmentTheme,
  spaces: spaceTheme,
  zIndices: zIndexTheme,
  breakpoints: breakpointTheme,
}

export { theme }
