import { createTheme, createThemeContract } from "@vanilla-extract/css"
import colorSetVars, { Color } from "./colorSetVars.css"

const withAlpha = (color: Color, alpha: number): string => {
  return `rgb(from ${color} r g b / ${alpha})`
}

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
  textDim?: Color
}

// Button
type ButtonType = "default" | "text" | "border"
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

type CommandDialogItemState = "default" | "hover" | "selected" | "disabled"
type CommandDialogItemColor = {
  background: Color
} & TextColor
type CommandDialogItemColorTheme = {
  [key in CommandDialogItemState]: CommandDialogItemColor
}

type CommandDialog = {
  overlay: Color
  background: Color
  border: Color
  placeholder: Color
  groupHeadingText: Color
  input: InputColor
  item: CommandDialogItemColorTheme
}

type ColorTheme = {
  primary: Color
  logo: Color
  background: Color

  container: ContainerColor

  text: TextColor

  button: ButtonColorTheme

  input: InputColorTheme

  commandDialog: CommandDialog
}

// ThemeColors
const lightModeThemeColors: ColorTheme = {
  primary: colorSetVars.primary500,
  logo: colorSetVars.gray400,
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
    textDim: colorSetVars.gray700,
  },

  button: {
    default: {
      default: {
        icon: colorSetVars.white,
        background: colorSetVars.primary500,
        border: "transparent",
        text: colorSetVars.white,
      },
      hover: {
        icon: colorSetVars.white,
        background: colorSetVars.primary600,
        border: "transparent",
        text: colorSetVars.white,
      },
      pressed: {
        icon: colorSetVars.white,
        background: colorSetVars.primary700,
        border: "transparent",
        text: colorSetVars.white,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.gray100,
        border: "transparent",
        text: colorSetVars.gray500,
      },
    },
    text: {
      default: {
        icon: colorSetVars.primary500,
        background: colorSetVars.white,
        border: "transparent",
        text: colorSetVars.primary500,
      },
      hover: {
        icon: colorSetVars.primary600,
        background: colorSetVars.white,
        border: "transparent",
        text: colorSetVars.primary600,
      },
      pressed: {
        icon: colorSetVars.primary700,
        background: colorSetVars.white,
        border: "transparent",
        text: colorSetVars.primary700,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.white,
        border: "transparent",
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
  commandDialog: {
    overlay: withAlpha(colorSetVars.black, 0.5),
    background: colorSetVars.white,
    border: colorSetVars.gray200,
    input: {
      icon: colorSetVars.gray500,
      placeholder: colorSetVars.gray400,
      background: "transparent",
      border: colorSetVars.gray300,
      text: colorSetVars.gray900,
    },
    placeholder: colorSetVars.gray400,
    groupHeadingText: colorSetVars.gray400,
    item: {
      default: {
        text: colorSetVars.gray900,
        background: "transparent",
      },
      hover: {
        text: colorSetVars.gray900,
        background: colorSetVars.gray100,
      },
      selected: {
        text: colorSetVars.primary500,
        background: colorSetVars.gray100,
      },
      disabled: {
        text: colorSetVars.gray500,
        background: colorSetVars.white,
      },
    },
  },
}

const darkModeThemeColors: ColorTheme = {
  primary: colorSetVars.primary100,
  logo: colorSetVars.gray500,
  background: colorSetVars.gray900,

  container: {
    background: colorSetVars.gray900,
    border: colorSetVars.gray700,
    borderHighlight: colorSetVars.primary200,
    shadow: colorSetVars.gray800,
  },

  text: {
    text: colorSetVars.gray50,
    textHighlight: colorSetVars.primary200,
    textDim: colorSetVars.gray200,
  },

  button: {
    default: {
      default: {
        icon: colorSetVars.white,
        background: colorSetVars.primary500,
        border: "transparent",
        text: colorSetVars.white,
      },
      hover: {
        icon: colorSetVars.white,
        background: colorSetVars.primary600,
        border: "transparent",
        text: colorSetVars.white,
      },
      pressed: {
        icon: colorSetVars.white,
        background: colorSetVars.primary700,
        border: "transparent",
        text: colorSetVars.white,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.gray600,
        border: "transparent",
        text: colorSetVars.gray600,
      },
    },
    text: {
      default: {
        icon: colorSetVars.gray300,
        background: "transparent",
        border: "transparent",
        text: colorSetVars.gray400,
      },
      hover: {
        icon: colorSetVars.gray200,
        background: colorSetVars.gray700,
        border: "transparent",
        text: colorSetVars.gray200,
      },
      pressed: {
        icon: colorSetVars.gray100,
        background: colorSetVars.gray800,
        border: "transparent",
        text: colorSetVars.gray100,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: colorSetVars.gray700,
        border: "transparent",
        text: colorSetVars.gray500,
      },
    },
    border: {
      default: {
        icon: colorSetVars.primary300,
        background: "transparent",
        border: colorSetVars.primary300,
        text: colorSetVars.primary300,
      },
      hover: {
        icon: colorSetVars.primary400,
        background: "transparent",
        border: colorSetVars.primary400,
        text: colorSetVars.primary400,
      },
      pressed: {
        icon: colorSetVars.primary600,
        background: "transparent",
        border: colorSetVars.primary600,
        text: colorSetVars.primary600,
      },
      disabled: {
        icon: colorSetVars.gray400,
        background: "transparent",
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
        background: "transparent",
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
  commandDialog: {
    overlay: withAlpha(colorSetVars.black, 0.5),
    background: colorSetVars.gray900,
    border: colorSetVars.gray700,
    input: {
      icon: colorSetVars.gray500,
      placeholder: colorSetVars.gray600,
      background: colorSetVars.gray800,
      border: colorSetVars.gray700,
      text: colorSetVars.gray100,
    },
    placeholder: colorSetVars.gray600,
    groupHeadingText: colorSetVars.gray500,
    item: {
      default: {
        text: colorSetVars.gray100,
        background: "transparent",
      },
      hover: {
        text: colorSetVars.gray100,
        background: colorSetVars.gray700,
      },
      selected: {
        text: colorSetVars.gray50,
        background: colorSetVars.gray800,
      },
      disabled: {
        text: colorSetVars.gray500,
        background: colorSetVars.gray900,
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
