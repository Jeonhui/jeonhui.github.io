import {Property} from "csstype";

import FontWeight = Property.FontWeight;
import FontSize = Property.FontSize;
import LineHeight = Property.LineHeight;
import {CSSProperties} from "@vanilla-extract/css";

type Typography = {
    fontSize: FontSize
    fontWeight: FontWeight
    lineHeight: LineHeight
    toStyle: (weight?: FontWeight) => CSSProperties
}

export default Typography