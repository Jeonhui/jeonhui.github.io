import pretendard from "./localFonts/pretendard";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import hack from "./localFonts/hack";

const fonts: NextFontWithVariable[] = [pretendard, hack]
const fontVariables = fonts.map(font => font.variable)

export default fontVariables