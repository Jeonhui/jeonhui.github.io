import { Property } from "csstype"
import FontFamily = Property.FontFamily

type FontTheme = {
  base: FontFamily
  code: FontFamily
}

const fontTheme: FontTheme = {
  base: `var(--font-pretendard), Arial`,
  code: `var(--font-hack)`,
}

export default fontTheme
