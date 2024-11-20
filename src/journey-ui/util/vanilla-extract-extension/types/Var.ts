import {CSSProperties} from "react";

export type CSSVarFunction = `var(--${string})` | `var(--${string}, ${string | number})`;

export type CSSPropertiesValueType = CSSProperties[keyof CSSProperties]

type Var<T extends CSSPropertiesValueType> = {
    defaultValue?: T
} & {
    var: CSSVarFunction
}

export default Var