import {BreakpointWidth, BreakpointMedia, BreakpointTheme} from "./BreakpointTheme";

const breakpointWidth: BreakpointWidth = {
    xSmall: '576px',
    small: '576px',
    medium: '768px',
    large: '992px',
    xLarge: '1200px',
    xxLarge: '1400px',
};

const breakpointsMedia: BreakpointMedia = {
    xSmall: `screen and (max-width: ${breakpointWidth.xSmall})`,
    small: `screen and (max-width: ${breakpointWidth.small})`,
    medium: `screen and (max-width: ${breakpointWidth.medium})`,
    large: `screen and (max-width: ${breakpointWidth.large})`,
    xLarge: `screen and (max-width: ${breakpointWidth.xLarge})`,
    xxLarge: `screen and (min-width: ${breakpointWidth.xxLarge})`,
}

const breakpointTheme: BreakpointTheme = Object.keys(breakpointWidth).reduce((acc, key) => {
    const breakpointKey = key as keyof BreakpointTheme;
    acc[breakpointKey] = {
        width: breakpointWidth[breakpointKey].toString(),
        media: breakpointsMedia[breakpointKey]
    };
    return acc;
}, {} as BreakpointTheme);

export {breakpointTheme}