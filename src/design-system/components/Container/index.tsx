import styled from "styled-components";
import React from "react";

const StyledContainer = styled.div`
    width: 200px;
    height: 50vh;
    color: ${({theme}) => theme.colors.primary600};
    background-color: ${({theme}) => theme.colors.primary300};
`

type ContainerProps = {
    children: React.ReactNode;
}

const Container = ({children}: ContainerProps) => {
    return <StyledContainer>{children}</StyledContainer>;
}

export default Container