import {Typography} from "./TypographyTheme";
import {CSSProperties} from "@vanilla-extract/css";
import {Property} from "csstype";
import FontWeight = Property.FontWeight;

const typographyToStyle = ({
                               fontSize,
                               fontWeight,
                               lineHeight
                           }: Typography,
                           weight?: FontWeight): CSSProperties => {
    return {
        fontSize,
        fontWeight: weight ?? fontWeight,
        lineHeight
    }
}

export default typographyToStyle;