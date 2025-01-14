import {ForwardedRef, forwardRef, ReactNode} from "react";
import styled from "styled-components";
import {Property} from "csstype";
import Direction from "../@types/Direction.ts";
import Align, {alignToStyle} from "../@types/Align.ts";

type AtomStackProps = {
    children?: ReactNode
    onClick?: () => void
    onMouseDown?: () => void
    onMouseUp?: () => void
    onMouseOver?: () => void
    onMouseOut?: () => void
} & StyledAtomStackProps

type StyledAtomStackProps = {
    direction: Direction
    align?: Align
    position?: Property.Position
    width?: Property.Width
    height?: Property.Height
    gap?: Property.Gap
    backgroundColor?: Property.BackgroundColor
    padding?: Property.Padding
    margin?: Property.Margin
    borderRadius?: Property.BorderRadius
    border?: Property.Border
    borderColor?: Property.BorderColor
    borderWidth?: Property.BorderWidth
    boxShadow?: Property.BoxShadow
    zIndex?: Property.ZIndex
    background?: Property.Background
    clipPath?: Property.ClipPath
}

const StyledAtomStack = styled.div<StyledAtomStackProps>`
    display: flex;
    position: ${({position}) => position ?? 'relative'};
    z-index: ${({zIndex}) => zIndex};
    flex-direction: ${({direction}) => direction === 'horizontal' ? 'row' : 'column'};
    gap: ${({gap}) => gap};
    ${({direction, align}) => alignToStyle(direction ?? 'vertical', align ?? 'center')}
    width: ${({width}) => width};
    height: ${({height}) => height};
    background-color: ${({backgroundColor}) => backgroundColor};
    padding: ${({padding}) => padding};
    margin: ${({margin}) => margin};
    border-radius: ${({borderRadius}) => borderRadius};
    border: ${({border}) => border};
    border-color: ${({borderColor}) => borderColor};
    border-width: ${({borderWidth}) => borderWidth};
    box-shadow: ${({boxShadow}) => boxShadow};
    clip-path: ${({clipPath}) => clipPath};
    background: ${({background}) => background};
`

const AtomStack = ({
                       children,
                       ...props
                   }: AtomStackProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledAtomStack ref={ref} {...props}>{children}</StyledAtomStack>
}

export type {AtomStackProps, StyledAtomStackProps}
export default forwardRef(AtomStack)