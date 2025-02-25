import {style} from "@vanilla-extract/css";
import {theme} from "@/design-system/theme/theme.css";

export const layout = style({
    display: 'flex',
    height: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
    backgroundColor: theme.colors.background
})

export const scrollable = style({
    minHeight: '100%',
    overflowY: 'scroll'
})