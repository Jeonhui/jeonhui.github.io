import pretendard from "@/design-system/theme/font/localFonts/pretendard";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import hack from "@/design-system/theme/font/localFonts/hack";

const fonts: NextFontWithVariable[] = [pretendard, hack]
const fontVariables = fonts.map(font => font.variable)

export default fontVariables