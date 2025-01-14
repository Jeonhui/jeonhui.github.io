import {Property} from "csstype";
import Font from "../Base/Font.ts";
import ButtonState from "../Base/ButtonState.ts";
import {Media} from "../Base/Media.ts";
import BoxStyle from "../Base/BoxStyle.ts";

type ButtonBaseSizeStyle = {
    boxStyle?: BoxStyle
    font?: Font
}

type ButtonSizeStyle = Media<ButtonBaseSizeStyle>

type ButtonBaseThemeStyle = {
    color?: Property.Color
    backgroundColor?: Property.BackgroundColor
    borderColor?: Property.BorderColor
}

type ButtonThemeStyle = {
    [key in ButtonState]?: ButtonBaseThemeStyle
}

type ButtonStyleKey = keyof ButtonSizeStyle | keyof ButtonBaseThemeStyle

type ButtonStyle = {
    size: ButtonSizeStyle
    theme: ButtonThemeStyle
}

export type {ButtonStyleKey, ButtonBaseSizeStyle, ButtonSizeStyle, ButtonBaseThemeStyle, ButtonThemeStyle}
export default ButtonStyle