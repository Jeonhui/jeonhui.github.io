import colorTheme, {themeColorsVars} from "./color/colorTheme.css";
import fontTheme from "./font/fontTheme.css";
import {createGlobalTheme} from "@vanilla-extract/css";


const themeWithoutThemeColorsVars = createGlobalTheme(':root', {
    color: colorTheme,
    font: fontTheme
})

const theme = {
    ...themeWithoutThemeColorsVars,
    colors: {
        ...themeColorsVars,
        ...themeWithoutThemeColorsVars.color
    }
}

export {theme}