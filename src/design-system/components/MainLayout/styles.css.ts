import {style} from "@vanilla-extract/css";
import {theme} from "../../theme/theme.css";

const breakpoint = theme.breakpoints.large

export const mainLayout = style({
    display: 'grid',
    height: '100%',
    padding: '1rem',

    gridTemplateColumns: '1fr 2fr 1fr',
    '@media': {
        [breakpoint.media]: {
            gridTemplateColumns: '1fr',
        }
    }
})

export const themeToggleSwitchContainer = style({
    position: 'fixed',
    right: '2rem',
    bottom: '2rem'
})

export const sideItem = style({
    '@media': {
        [breakpoint.media]: {
            display: 'none'
        }
    }
})

export const leftSideItem = style({})

export const rightSideItem = style({})