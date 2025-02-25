import colorTheme, {themeColorsVars} from "./color/colorTheme.css";
import fontTheme from "./font/fontTheme.css";
import {createGlobalTheme} from "@vanilla-extract/css";


const themeWithoutThemeColorsVars = createGlobalTheme(':root', {
    colors: colorTheme,
    fonts: fontTheme
})

const theme = {
    ...themeWithoutThemeColorsVars,
    colors: {
        ...themeColorsVars,
        ...themeWithoutThemeColorsVars.colors
    }
}

export {theme}