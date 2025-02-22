import {BreakpointsType, BreakpointsMediaType} from "@/design-system/theme/type/BreakpointsType";

const breakpoints: BreakpointsType = {
    xSmall: 576,
    small: 576,
    medium: 768,
    large: 992,
    xLarge: 1200,
    xxLarge: 1400,
};

const breakpointsMedia: BreakpointsMediaType = {
    xSmall: `screen and (max-width: ${breakpoints.xSmall})`,
    small: `screen and (min-width: ${breakpoints.small})`,
    medium: `screen and (min-width: ${breakpoints.medium})`,
    large: `screen and (min-width: ${breakpoints.large})`,
    xLarge: `screen and (min-width: ${breakpoints.xLarge})`,
    xxLarge: `screen and (min-width: ${breakpoints.xxLarge})`,
}

export {breakpoints, breakpointsMedia}