import {Breakpoints} from "../../media/breakpoints.ts";

export type Media<T> = {
    [K in keyof T]: T[K]
} & {
    [K in Breakpoints]?: T
}