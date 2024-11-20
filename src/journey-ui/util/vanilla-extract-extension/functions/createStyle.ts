import Vars from "../types/Vars.ts";
import {ComplexStyleRule, style} from "@vanilla-extract/css";
import {CSSProperties} from "react";
import Var from "../types/Var.ts";

const createStyle = <T extends keyof CSSProperties>(vars: Vars<T>,
                                                    rule: ComplexStyleRule = {},
                                                    debugId?: string) => {
    const kv = Object.entries(vars).map(([k, v]) => {
        const key = k as T
        const value = v as Var<CSSProperties[typeof key]>
        return {key: key, varValue: value.var.toString(), value: value.value?.toString()}
    })
    const varValues = Object.fromEntries(kv.map(({key, varValue}) => [key, varValue]))
    const styleValues = Object.fromEntries(kv
        .filter(({key, value}) => value !== undefined && !(key in varValues))
        .map(({key, value}) => [key, value]))

    console.log(varValues)
    return style([{
        vars: varValues,
        ...styleValues
    },
        ...[rule].flat()], debugId);
}

export default createStyle