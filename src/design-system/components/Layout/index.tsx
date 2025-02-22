"use client"

import styled from "styled-components";
import React from "react";

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary100};
    overflow: scroll;
    scroll-behavior: smooth;
`

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (<StyledLayout>
        {children}
    </StyledLayout>)
}

export default Layout