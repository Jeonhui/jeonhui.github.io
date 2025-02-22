type BreakpointsType = {
    xSmall: number,
    small: number,
    medium: number,
    large: number,
    xLarge: number,
    xxLarge: number
}

type BreakpointsMediaType = { [key in keyof BreakpointsType]: string }

export type {BreakpointsType, BreakpointsMediaType}