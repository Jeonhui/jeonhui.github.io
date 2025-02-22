import {breakpointsMedia} from "@/design-system/theme/breakpoint/breakpoints";
import lightColors from "@/design-system/theme/color/lightColors";
import darkColors from "@/design-system/theme/color/darkColors";
import typographies from "@/design-system/theme/typography/typographies";
import {ThemeType} from "@/design-system/theme/type/ThemeType";

const lightTheme: ThemeType = {
    breakpoints: breakpointsMedia,
    typographies: typographies,
    colors: lightColors
};

const darkTheme = {
    breakpoints: breakpointsMedia,
    typographies: typographies,
    colors: darkColors
}

export {lightTheme, darkTheme};