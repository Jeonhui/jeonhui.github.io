import {Property} from "csstype";

type Width = Property.Width;

type Breakpoint = {
    width: string,
    media: string
}

type BreakpointTheme = {
    xSmall: Breakpoint,
    small: Breakpoint,
    medium: Breakpoint,
    large: Breakpoint,
    xLarge: Breakpoint,
    xxLarge: Breakpoint
}

type BreakpointWidth = { [key in keyof BreakpointTheme]: Width }
type BreakpointMedia = { [key in keyof BreakpointTheme]: string }

export type {
    BreakpointWidth, BreakpointMedia
}
export type {BreakpointTheme}