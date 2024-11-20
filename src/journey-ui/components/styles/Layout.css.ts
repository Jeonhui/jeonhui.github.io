import {style} from '@vanilla-extract/css'


const baseLayoutStyle = style({
    position: "relative",
    display: 'flex',
    flexDirection: 'column',
    width: '100svw'
});

export const scrollableLayoutStyle = style([baseLayoutStyle, {
    overflowY: 'scroll',
    overflowX: 'hidden',
    minHeight: '100svh'
}])

const layoutStyle = style([{
    height: '100svh'
}])

export default layoutStyle
