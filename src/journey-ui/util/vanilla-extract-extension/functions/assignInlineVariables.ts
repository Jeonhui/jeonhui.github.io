import {CSSProperties} from "react";
import Vars from "../types/Vars.ts";
import Var from "../types/Var.ts";
import {assignInlineVars} from "@vanilla-extract/dynamic";

const assignInlineVariables = <T extends keyof CSSProperties>(vars: Vars<T>, values: { [K in keyof Vars<T>]: CSSProperties[K] }) => {
    const kv = Object.entries(vars).map(([k, v]) => {
        const key = k as T
        const value = v as Var<CSSProperties[typeof key]>
        return {varValue: value.var.toString(), value: values[key]?.toString()}
    })
    const properties = Object.fromEntries(kv
        .filter(({value}) => value !== undefined)
        .map(({varValue, value}) => [varValue, value]))
    console.log(properties)
    return assignInlineVars({...properties})
}

export default assignInlineVariables;