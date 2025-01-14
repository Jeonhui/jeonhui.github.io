import {css, CSSObject, Interpolation} from "styled-components";
import breakpoints, {Breakpoints} from "./breakpoints.ts";

const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
    return {
        ...acc,
        [key]: (
            first: CSSObject | TemplateStringsArray,
            ...interpolations: Interpolation<any>[]
        ) => css`
            ${value} {
                ${css(first, ...interpolations)}
            }
        `,
    };
}, {}) as Record<Breakpoints, any>;

export { media };