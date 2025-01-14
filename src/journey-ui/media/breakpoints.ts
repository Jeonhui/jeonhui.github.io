type Breakpoints = "small" | "medium" | "large";

const breakpoints: Record<Breakpoints, string> = {
    small: '@media screen and (max-width: 639px)',
    medium: '@media screen and (max-width: 768px)',
    large: '@media screen (min-width: 768px)',
}

type MediaType<T> = T & {
    [key in Breakpoints]?: T
}

export type {Breakpoints, MediaType};
export default breakpoints;