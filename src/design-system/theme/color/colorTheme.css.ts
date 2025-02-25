import {createGlobalTheme, createTheme, createThemeContract} from "@vanilla-extract/css";
import {
    Gray,
    PrimaryBlue,
    SystemGreen,
    SystemRed,
    SystemYellow,
    ColorTheme,
    ThemeColors,
    colorThemeVarNames
} from "./ColorTheme";

const primaryBlue: PrimaryBlue = {
    primary900: '#1E0B4E',
    primary800: '#182170',
    primary700: '#123791',
    primary600: '#0C4DB2',
    primary500: '#0763D3',
    primary400: '#017AF5',
    primary300: '#3494F7',
    primary200: '#67AFF9',
    primary100: '#9ACAFB',
    primary50: '#CCE5FD'
}

const gray: Gray = {
    black: '#000000',
    white: '#FFFFFF',
    gray900: '#242426',
    gray800: '#3A3A3C',
    gray700: '#505051',
    gray600: '#666667',
    gray500: '#7C7C7D',
    gray400: '#929293',
    gray300: '#A8A8A8',
    gray200: '#BDBDBE',
    gray100: '#D4D4D4',
    gray50: '#EAEAEA'
}


const systemRed: SystemRed = {
    systemRed900: '#911124',
    systemRed800: '#91282C',
    systemRed700: '#A92B35',
    systemRed600: '#C12D3D',
    systemRed500: '#D82F45',
    systemRed400: '#F0324E',
    systemRed300: '#F35B71',
    systemRed200: '#F68495',
    systemRed100: '#F9ADB8',
    systemRed50: '#FCD6DC'
}

const systemYellow: SystemYellow = {
    systemYellow900: '#E5A501',
    systemYellow800: '#EAAB12',
    systemYellow700: '#EFB224',
    systemYellow600: '#F5B836',
    systemYellow500: '#FABF47',
    systemYellow400: '#FFC659',
    systemYellow300: '#FFD17A',
    systemYellow200: '#FFDD9B',
    systemYellow100: '#FFE8BD',
    systemYellow50: '#FFF4DE'
}

const systemGreen: SystemGreen = {
    systemGreen900: '#028928',
    systemGreen800: '#0F9440',
    systemGreen700: '#1C9F58',
    systemGreen600: '#29AB71',
    systemGreen500: '#36B688',
    systemGreen400: '#43C2A1',
    systemGreen300: '#69CEB4',
    systemGreen200: '#8EDAC7',
    systemGreen100: '#B4E7DA',
    systemGreen50: '#DAF3ED'
}

const themeColors: ThemeColors = {
    ...primaryBlue,
    ...gray,
    ...systemRed,
    ...systemYellow,
    ...systemGreen
}

export const themeColorsVars = createGlobalTheme(':root', themeColors)

// ThemeColors
const lightModeThemeColors: ColorTheme = {
    bodyBackground: themeColorsVars.gray50,
    background: themeColorsVars.gray100,

    primary: themeColorsVars.primary500,
    secondary: themeColorsVars.primary300,
    tertiary: themeColorsVars.primary100,

    text: themeColorsVars.gray900,
    textHighlight: "",

    border: themeColorsVars.gray300,
    borderHighlight: "",

    shadow: themeColorsVars.gray200,

    inputText: "",
    inputPlaceHolder: "",
    inputBackground: "",

    success: themeColorsVars.systemGreen500,
    danger: themeColorsVars.systemRed500,
    warning: themeColorsVars.systemYellow500,
    info: themeColorsVars.primary300,
};

const darkModeThemeColors: ColorTheme = {
    bodyBackground: themeColorsVars.gray900,
    background: themeColorsVars.gray800,

    primary: themeColorsVars.primary300,
    secondary: themeColorsVars.primary200,
    tertiary: themeColorsVars.primary100,

    text: themeColorsVars.gray100,
    textHighlight: "",

    border: themeColorsVars.gray700,
    borderHighlight: "",

    shadow: themeColorsVars.gray800,

    inputText: "",
    inputPlaceHolder: "",
    inputBackground: "",

    success: themeColorsVars.systemGreen300,
    danger: themeColorsVars.systemRed300,
    warning: themeColorsVars.systemYellow300,
    info: themeColorsVars.primary200,
};

// colorThemes
const colorThemeVars = createThemeContract(colorThemeVarNames)

const lightModeColorTheme = createTheme(colorThemeVars, lightModeThemeColors)
const darkModeColorTheme = createTheme(colorThemeVars, darkModeThemeColors)

const colorTheme = colorThemeVars

export {themeColors}
export default colorTheme
export {lightModeColorTheme, darkModeColorTheme}