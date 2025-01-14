import {ForwardedRef, forwardRef} from "react";
import styled from "styled-components";
import {Property} from "csstype";
import Align, {alignToTextStyle} from "../@types/Align.ts";

type AtomTextProps = {
    children?: string
} & StyledAtomTextProps

type StyledAtomTextProps = {
    align?: Align
    font?: Property.Font
    fontWeight?: Property.FontWeight
    color?: Property.Color
    width?: Property.Width
    height?: Property.Height
    padding?: Property.Padding
    margin?: Property.Margin
}

const StyledAtomText = styled.span<StyledAtomTextProps>`
    ${({align}) => alignToTextStyle(align ?? 'center')}
    font-weight: ${({fontWeight}) => fontWeight};
    color: ${({color}) => color};
    width: ${({width}) => width};
    height: ${({height}) => height};
    padding: ${({padding}) => padding};
    margin: ${({margin}) => margin};
    cursor: default;
`

const AtomText = ({
                      children,
                      ...props
                  }: AtomTextProps, ref: ForwardedRef<HTMLSpanElement>) => {
    return <StyledAtomText ref={ref} {...props}>{children}</StyledAtomText>
}

export type {AtomTextProps, StyledAtomTextProps}
export default forwardRef(AtomText)