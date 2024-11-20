import {createVar} from "@vanilla-extract/css";
import Var, {CSSPropertiesValueType} from "../types/Var.ts";

const createVariables = <T extends CSSPropertiesValueType>({value}: Omit<Var<T>, 'var'>): Var<T> => {
    return {
        value: value,
        var: createVar()
    }
}

export default createVariables;