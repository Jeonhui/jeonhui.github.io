import { createTheme, createThemeContract } from "@vanilla-extract/css"
import colorSetVars, { Color } from "./colorSetVars.css"

// Container
type ContainerColor = {
  background: Color
  border: Color
  borderHighlight: Color
  shadow: Color
}

// Text
type TextColor = {
  text: Color
  textHighlight?: Color
}

// Button
type ButtonType = "default" | "light" | "border"
type ButtonState = "default" | "hover" | "pressed" | "disabled"
type ButtonColor = {
  icon: Color
  background?: Color
  border?: Color
} & TextColor
type ButtonStateColor = { [key in ButtonState]: ButtonColor }
type ButtonTypeColor = { [key in ButtonType]: ButtonStateColor }
type ButtonColorTheme = ButtonTypeColor

// Input
type InputType = "default" | "light" | "border"
type InputState = "default" | "hover" | "focused" | "disabled"
type InputColor = {
  icon: Color
  placeholder: Color
  background: Color
  border: Color
} & TextColor
type InputStateColor = { [key in InputState]: InputColor }
type InputTypeColor = { [key in InputType]: InputStateColor }
type InputColorTheme = InputTypeColor

type ColorTheme = {
  primary: Color
  background: Color

  container: ContainerColor

  text: TextColor

  button: ButtonColorTheme

  input: InputColorTheme
}

// ThemeColors
const lightModeThemeColors: ColorTheme = {
  primary: colorSetVars.primary500,
  background: colorSetVars.white,

  container: {
    background: colorSetVars.white,
    border: colorSetVars.gray200,
    borderHighlight: colorSetVars.primary400,
    shadow: colorSetVars.gray300,
  },

  text: {
    text: colorSetVars.gray900,
    textHighlight: colorSetVars.primary500,
  },

  button: {
    default: {
      default: {
        icon: colorSetVars.white,
        background: colorSetVars.primary500,
        border: colorSetVars.primary500,
        text: colorSetVars.white,
      },
      hover: {
        icon: colorSetVars.white,
        background: colorSetVars.primary600,
        border: colorSetVars.primary600,
        text: colorSetVars.white,
      },
      pressed: {
        icon: colorSetVars.white,
        background: colorSetVars.primary700,
        border: colorSetVars.primary700,
        text: colorSetVars.white,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.gray100,
        border: colorSetVars.gray200,
        text: colorSetVars.gray500,
      },
    },
    light: {
      default: {
        icon: colorSetVars.primary500,
        background: colorSetVars.white,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary600,
        background: colorSetVars.white,
        border: colorSetVars.primary600,
        text: colorSetVars.primary600,
      },
      pressed: {
        icon: colorSetVars.primary700,
        background: colorSetVars.white,
        border: colorSetVars.primary700,
        text: colorSetVars.primary700,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.white,
        border: colorSetVars.gray200,
        text: colorSetVars.gray500,
      },
    },
    border: {
      default: {
        icon: colorSetVars.primary500,
        background: colorSetVars.white,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary600,
        background: colorSetVars.white,
        border: colorSetVars.primary600,
        text: colorSetVars.primary600,
      },
      pressed: {
        icon: colorSetVars.primary700,
        background: colorSetVars.white,
        border: colorSetVars.primary700,
        text: colorSetVars.primary700,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.white,
        border: colorSetVars.gray200,
        text: colorSetVars.gray500,
      },
    },
  },

  input: {
    default: {
      default: {
        icon: colorSetVars.gray500,
        placeholder: colorSetVars.gray400,
        background: colorSetVars.white,
        border: colorSetVars.gray300,
        text: colorSetVars.gray900,
      },
      hover: {
        icon: colorSetVars.gray500,
        placeholder: colorSetVars.gray400,
        background: colorSetVars.white,
        border: colorSetVars.primary500,
        text: colorSetVars.gray900,
      },
      focused: {
        icon: colorSetVars.gray500,
        placeholder: colorSetVars.gray400,
        background: colorSetVars.white,
        border: colorSetVars.primary600,
        text: colorSetVars.gray900,
      },
      disabled: {
        icon: colorSetVars.gray300,
        placeholder: colorSetVars.gray200,
        background: colorSetVars.gray100,
        border: colorSetVars.gray200,
        text: colorSetVars.gray500,
      },
    },
    light: {
      default: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.white,
        border: colorSetVars.primary400,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.white,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      focused: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.white,
        border: colorSetVars.primary600,
        text: colorSetVars.primary500,
      },
      disabled: {
        icon: colorSetVars.primary300,
        placeholder: colorSetVars.primary200,
        background: colorSetVars.white,
        border: colorSetVars.primary200,
        text: colorSetVars.primary400,
      },
    },
    border: {
      default: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.white,
        border: colorSetVars.primary400,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.white,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      focused: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.white,
        border: colorSetVars.primary600,
        text: colorSetVars.primary500,
      },
      disabled: {
        icon: colorSetVars.primary300,
        placeholder: colorSetVars.primary200,
        background: colorSetVars.white,
        border: colorSetVars.primary200,
        text: colorSetVars.primary400,
      },
    },
  },
}

const darkModeThemeColors: ColorTheme = {
  primary: colorSetVars.primary100,
  background: colorSetVars.gray900,

  container: {
    background: colorSetVars.gray900,
    border: colorSetVars.gray700,
    borderHighlight: colorSetVars.primary200,
    shadow: colorSetVars.gray800,
  },

  text: {
    text: colorSetVars.white,
    textHighlight: colorSetVars.primary200,
  },

  button: {
    default: {
      default: {
        icon: colorSetVars.white,
        background: colorSetVars.primary500,
        border: colorSetVars.primary500,
        text: colorSetVars.white,
      },
      hover: {
        icon: colorSetVars.white,
        background: colorSetVars.primary600,
        border: colorSetVars.primary600,
        text: colorSetVars.white,
      },
      pressed: {
        icon: colorSetVars.white,
        background: colorSetVars.primary700,
        border: colorSetVars.primary700,
        text: colorSetVars.white,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.gray600,
        border: colorSetVars.gray500,
        text: colorSetVars.gray600,
      },
    },
    light: {
      default: {
        icon: colorSetVars.primary500,
        background: colorSetVars.gray800,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary600,
        background: colorSetVars.gray800,
        border: colorSetVars.primary600,
        text: colorSetVars.primary600,
      },
      pressed: {
        icon: colorSetVars.primary700,
        background: colorSetVars.gray800,
        border: colorSetVars.primary700,
        text: colorSetVars.primary700,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.gray700,
        border: colorSetVars.gray600,
        text: colorSetVars.gray500,
      },
    },
    border: {
      default: {
        icon: colorSetVars.primary500,
        background: colorSetVars.gray800,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary600,
        background: colorSetVars.gray800,
        border: colorSetVars.primary600,
        text: colorSetVars.primary600,
      },
      pressed: {
        icon: colorSetVars.primary700,
        background: colorSetVars.gray800,
        border: colorSetVars.primary700,
        text: colorSetVars.primary700,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.gray700,
        border: colorSetVars.gray600,
        text: colorSetVars.gray500,
      },
    },
  },

  input: {
    default: {
      default: {
        icon: colorSetVars.gray500,
        placeholder: colorSetVars.gray600,
        background: colorSetVars.gray800,
        border: colorSetVars.gray700,
        text: colorSetVars.white,
      },
      hover: {
        icon: colorSetVars.gray500,
        placeholder: colorSetVars.gray600,
        background: colorSetVars.gray800,
        border: colorSetVars.primary500,
        text: colorSetVars.white,
      },
      focused: {
        icon: colorSetVars.gray500,
        placeholder: colorSetVars.gray600,
        background: colorSetVars.gray800,
        border: colorSetVars.primary600,
        text: colorSetVars.white,
      },
      disabled: {
        icon: colorSetVars.gray300,
        placeholder: colorSetVars.gray400,
        background: colorSetVars.gray700,
        border: colorSetVars.gray600,
        text: colorSetVars.gray500,
      },
    },
    light: {
      default: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.gray800,
        border: colorSetVars.primary400,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.gray800,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      focused: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.gray800,
        border: colorSetVars.primary600,
        text: colorSetVars.primary500,
      },
      disabled: {
        icon: colorSetVars.primary300,
        placeholder: colorSetVars.primary200,
        background: colorSetVars.gray700,
        border: colorSetVars.primary200,
        text: colorSetVars.primary400,
      },
    },
    border: {
      default: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.gray800,
        border: colorSetVars.primary400,
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.gray800,
        border: colorSetVars.primary500,
        text: colorSetVars.primary500,
      },
      focused: {
        icon: colorSetVars.primary500,
        placeholder: colorSetVars.primary400,
        background: colorSetVars.gray800,
        border: colorSetVars.primary600,
        text: colorSetVars.primary500,
      },
      disabled: {
        icon: colorSetVars.primary300,
        placeholder: colorSetVars.primary200,
        background: colorSetVars.gray700,
        border: colorSetVars.primary200,
        text: colorSetVars.primary400,
      },
    },
  },
}

const colorTheme = createThemeContract(darkModeThemeColors)

const lightModeColorTheme = createTheme(colorTheme, lightModeThemeColors)
const darkModeColorTheme = createTheme(colorTheme, darkModeThemeColors)

export default colorTheme
export { colorSetVars }
export { lightModeColorTheme, darkModeColorTheme }
