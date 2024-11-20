import {createVar} from "@vanilla-extract/css";
import Var, {CSSPropertiesValueType} from "../types/Var.ts";

const createVariables = <T extends CSSPropertiesValueType>({defaultValue}: Omit<Var<T>, 'var'>): Var<T> => {
    return {
        defaultValue: defaultValue,
        var: createVar()
    }
}

export default createVariables;