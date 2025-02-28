import { Property } from "csstype"
import { createGlobalTheme } from "@vanilla-extract/css"

type Color = Property.Color

type ColorRange = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type ColorMap<T extends string> = {
  [key in `${T}${ColorRange}`]: Color
}

type PrimaryBlue = ColorMap<"primary">
type Gray = ColorMap<"gray"> & { black: Color; white: Color }
type SystemRed = ColorMap<"systemRed">
type SystemYellow = ColorMap<"systemYellow">
type SystemGreen = ColorMap<"systemGreen">

type ColorSet = PrimaryBlue & Gray & SystemRed & SystemYellow & SystemGreen

const primaryBlue: PrimaryBlue = {
  primary900: "#0a2540",
  primary800: "#0f3d5e",
  primary700: "#155d85",
  primary600: "#1b7bb1",
  primary500: "#209cee",
  primary400: "#52b8ff",
  primary300: "#7fccff",
  primary200: "#a6e0ff",
  primary100: "#ccecff",
  primary50: "#e6f7ff",
}

const gray: Gray = {
  black: "#000000",
  white: "#ffffff",
  gray900: "#1a1a1a",
  gray800: "#333333",
  gray700: "#4d4d4d",
  gray600: "#666666",
  gray500: "#808080",
  gray400: "#999999",
  gray300: "#b3b3b3",
  gray200: "#cccccc",
  gray100: "#e6e6e6",
  gray50: "#f2f2f2",
}

const systemRed: SystemRed = {
  systemRed900: "#7f1d1d",
  systemRed800: "#991b1b",
  systemRed700: "#b91c1c",
  systemRed600: "#dc2626",
  systemRed500: "#ef4444",
  systemRed400: "#f87171",
  systemRed300: "#fca5a5",
  systemRed200: "#fecaca",
  systemRed100: "#fee2e2",
  systemRed50: "#fef2f2",
}

const systemYellow: SystemYellow = {
  systemYellow900: "#78350f",
  systemYellow800: "#92400e",
  systemYellow700: "#b45309",
  systemYellow600: "#d97706",
  systemYellow500: "#f59e0b",
  systemYellow400: "#fbbf24",
  systemYellow300: "#fcd34d",
  systemYellow200: "#fde68a",
  systemYellow100: "#fef3c7",
  systemYellow50: "#fffbeb",
}

const systemGreen: SystemGreen = {
  systemGreen900: "#064e3b",
  systemGreen800: "#065f46",
  systemGreen700: "#047857",
  systemGreen600: "#059669",
  systemGreen500: "#10b981",
  systemGreen400: "#34d399",
  systemGreen300: "#6ee7b7",
  systemGreen200: "#a7f3d0",
  systemGreen100: "#d1fae5",
  systemGreen50: "#ecfdf5",
}

const colorSet: ColorSet = {
  ...primaryBlue,
  ...gray,
  ...systemRed,
  ...systemYellow,
  ...systemGreen,
}

const colorSetVars = createGlobalTheme(":root", colorSet)

export type { Color }
export default colorSetVars
