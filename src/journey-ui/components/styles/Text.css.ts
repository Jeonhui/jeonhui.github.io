import {Vars, createVariables} from "../../util/vanilla-extract-extension";
import createStyle from "../../util/vanilla-extract-extension/functions/createStyle.ts";

export const textStyleVars: Vars<'fontSize' | 'color'> = {
    fontSize: createVariables({default: '1rem'}),
    color: createVariables({default: 'black'}),
}

export const TextStyle = createStyle(textStyleVars)
