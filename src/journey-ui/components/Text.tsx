import {forwardRef, ForwardedRef} from "react";
import {Color} from "../constants/Color.ts";
import {textStyleVars, TextStyle} from "./styles/Text.css.ts";
import {Font} from "../constants/Font.ts";
import fonts from "../themes/fonts/fonts.ts";
import {assignInlineVariables} from "../util/vanilla-extract-extension";


type TextProps = {
    children?: string
    fontStyle?: Font
    color?: Color
}

const Text = ({children, fontStyle = fonts.display1, color}: TextProps, ref: ForwardedRef<HTMLSpanElement>) => {
    return <span ref={ref} className={TextStyle} style={
        assignInlineVariables(textStyleVars, {
            fontSize: fontStyle.fontSize,
            color: color
        })}>
        {children}
    </span>
}

export default forwardRef(Text);