import { createGlobalTheme } from "@vanilla-extract/css"
import {
  alignments,
  breakpoints,
  colorSetVars,
  colorTheme,
  fonts,
  layouts,
  spaces,
  typographies,
  zIndices,
} from "./themes/index.css"

const globalColorThemeVars = createGlobalTheme(":root", colorTheme)

const theme = {
  colors: globalColorThemeVars,
  colorSet: colorSetVars,
  fonts: fonts,
  typographies: typographies,
  layouts: layouts,
  alignments: alignments,
  spaces: spaces,
  breakpoints: breakpoints,
  zIndices: zIndices,
}

export { theme }
