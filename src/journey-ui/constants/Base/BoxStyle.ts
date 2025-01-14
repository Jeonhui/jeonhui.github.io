import {Property} from "csstype";
import {Media} from "./Media.ts";

type BaseBoxStyle = {
    padding?: Property.Padding
    borderRadius?: Property.BorderRadius
    borderWidth?: Property.BorderWidth
    gap?: Property.Gap
}

type BoxStyle = Media<BaseBoxStyle>

export type {BaseBoxStyle}
export default BoxStyle