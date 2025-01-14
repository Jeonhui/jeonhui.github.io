import Direction from "./Direction.ts";

type VerticalAlign = 'left' | 'center' | 'right'
type HorizontalAlign = 'top' | 'center' | 'bottom'
type Align =
    'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'centerLeft'
    | 'center'
    | 'centerRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'

export default Align
export type {VerticalAlign, HorizontalAlign}

const alignMap: Record<Align, [VerticalAlign, HorizontalAlign]> = {
    topLeft: ['left', 'top'],
    topCenter: ['center', 'top'],
    topRight: ['right', 'top'],
    centerLeft: ['left', 'center'],
    center: ['center', 'center'],
    centerRight: ['right', 'center'],
    bottomLeft: ['left', 'bottom'],
    bottomCenter: ['center', 'bottom'],
    bottomRight: ['right', 'bottom']
}

export {alignMap}

const alignToStyle = (direction: Direction, align: Align) => {
    const [vertical, horizontal] = alignMap[align];
    if (direction === 'vertical') {
        return `
                align-items: ${vertical == 'left' ? 'flex-start' : vertical == 'center' ? 'center' : 'flex-end'};
                justify-content: ${horizontal == 'top' ? 'flex-start' : horizontal == 'center' ? 'center' : 'flex-end'};
            `

    } else {
        return `
                align-items: ${horizontal == 'top' ? 'flex-start' : horizontal == 'center' ? 'center' : 'flex-end'};
                justify-content: ${vertical == 'left' ? 'flex-start' : vertical == 'center' ? 'center' : 'flex-end'};
            `
    }
}

const alignToTextStyle = (align: Align) => {
    const [vertical, horizontal] = alignMap[align];
    return `
        text-align: ${horizontal};
        align-self: ${vertical};
    `
}

export {alignToStyle, alignToTextStyle}