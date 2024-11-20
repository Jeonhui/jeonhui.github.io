import {Vars, createVariables} from "../../util/vanilla-extract-extension";
import createStyle from "../../util/vanilla-extract-extension/functions/createStyle.ts";

export const textStyleVars: Vars<'fontSize' | 'color'> = {
    fontSize: createVariables({defaultValue: '1rem'}),
    color: createVariables({defaultValue: 'black'}),
}

export const TextStyle = createStyle(textStyleVars)
