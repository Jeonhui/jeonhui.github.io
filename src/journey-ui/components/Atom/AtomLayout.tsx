import {ForwardedRef, forwardRef, ReactNode} from "react";
import styled from "styled-components";
import {Property} from "csstype";

type AtomLayoutProps = {
    children?: ReactNode
} & StyledAtomLayoutProps

type StyledAtomLayoutProps = {
    scrollable?: boolean
    backgroundColor?: Property.BackgroundColor
}

const StyledAtomLayout = styled.div<StyledAtomLayoutProps>`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${({scrollable}) => scrollable ? '100vh' : 'fit-content'};
    overflow-y: ${({scrollable}) => scrollable ? 'scroll' : 'clip'};
    overflow-x: hidden;
`

const AtomLayout = ({
                        children,
                        ...props
                    }: AtomLayoutProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <StyledAtomLayout ref={ref} {...props}>{children}</StyledAtomLayout>
}

export type {AtomLayoutProps, StyledAtomLayoutProps}
export default forwardRef(AtomLayout)