import VarNames from "@/design-system/theme/type/VarNames";
import {Property} from "csstype";

import Color = Property.Color;

type PrimaryBlue = {
    primary900: Color,
    primary800: Color,
    primary700: Color,
    primary600: Color,
    primary500: Color,
    primary400: Color,
    primary300: Color,
    primary200: Color,
    primary100: Color,
    primary50: Color,
}

type Gray = {
    black: Color,
    white: Color,
    gray900: Color,
    gray800: Color,
    gray700: Color,
    gray600: Color,
    gray500: Color,
    gray400: Color,
    gray300: Color,
    gray200: Color,
    gray100: Color,
    gray50: Color
}

type SystemRed = {
    systemRed900: Color,
    systemRed800: Color,
    systemRed700: Color,
    systemRed600: Color,
    systemRed500: Color,
    systemRed400: Color,
    systemRed300: Color,
    systemRed200: Color,
    systemRed100: Color,
    systemRed50: Color
}

type SystemYellow = {
    systemYellow900: Color,
    systemYellow800: Color,
    systemYellow700: Color,
    systemYellow600: Color,
    systemYellow500: Color,
    systemYellow400: Color,
    systemYellow300: Color,
    systemYellow200: Color,
    systemYellow100: Color,
    systemYellow50: Color
}

type SystemGreen = {
    systemGreen900: Color,
    systemGreen800: Color,
    systemGreen700: Color,
    systemGreen600: Color,
    systemGreen500: Color,
    systemGreen400: Color,
    systemGreen300: Color,
    systemGreen200: Color,
    systemGreen100: Color,
    systemGreen50: Color
}

type PrimaryColor = {
    primaryBlue: Color
}

export type {
    PrimaryBlue,
    Gray,
    SystemRed,
    SystemYellow,
    SystemGreen,
    PrimaryColor
}

type ColorTheme = {
    background: Color;
    black: Color;
    white: Color;

    primary: Color;
    secondary: Color;
    tertiary: Color;

    success: Color;
    danger: Color;
    warning: Color;
    info: Color;

    text: Color;
    border: Color;
    shadow: Color;

    muted: Color;
    contrast: Color;
    highlight: Color;
}

export type {Color}

type ThemeColors = PrimaryBlue & Gray & SystemRed & SystemYellow & SystemGreen & PrimaryColor
export type {ThemeColors, ColorTheme}

// varNames
const colorThemeVarNames: VarNames<ColorTheme> = {
    background: "",
    black: "",
    border: "",
    contrast: "",
    danger: "",
    highlight: "",
    info: "",
    muted: "",
    primary: "",
    secondary: "",
    shadow: "",
    success: "",
    tertiary: "",
    text: "",
    warning: "",
    white: ""
}

export {colorThemeVarNames}
