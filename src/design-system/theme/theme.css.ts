import colorTheme, {themeColorsVars} from "./color/colorTheme.css";
import fontTheme from "./font/fontTheme.css";
import typographyTheme from "./typography/typographyTheme.css";
import {createGlobalTheme} from "@vanilla-extract/css";
import typographyToStyle from "./typography/typographyToStyle.css";
import {breakpointTheme} from "@/design-system/theme/breakpoint/breakpointTheme.css";

const themeWithoutThemeColorsVars = createGlobalTheme(':root', {
    colors: colorTheme,
    fonts: fontTheme,
    typographies: typographyTheme,
})

const theme = {
    ...themeWithoutThemeColorsVars,
    colors: {
        ...themeColorsVars,
        ...themeWithoutThemeColorsVars.colors
    },
    breakpoints: breakpointTheme
}

export {typographyToStyle}
export {theme}