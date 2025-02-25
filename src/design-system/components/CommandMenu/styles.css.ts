import {theme, typographyToStyle} from "../../theme/theme.css";
import {style} from "@vanilla-extract/css";

export const input = style({
    color: theme.colors.text,
    fontFamily: theme.fonts.code,
    ...typographyToStyle(theme.typographies.display1)
})