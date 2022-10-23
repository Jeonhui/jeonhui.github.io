import React from "react";
import r from "../../source/r.png"
import styled from "styled-components";

const EdgeContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const EdgeImage = styled.div`
  position: absolute;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background: url(${r});
  background-size: cover;
`

const LeftTopEdgeImage = styled(EdgeImage)`
  left: 0;
  top: 0;
`

const LeftBottomEdgeImage = styled(EdgeImage)`
  left: 0;
  bottom: 0;
  transform: rotate(-90deg);
`

const RightTopEdgeImage = styled(EdgeImage)`
  right: 0;
  top: 0;
  transform: rotate(90deg);
`


const RightBottomEdgeImage = styled(EdgeImage)`
  right: 0;
  bottom: 0;
  transform: rotate(180deg);
`


export default function Edge() {
    return (
        <EdgeContainer className="Edge">
            <LeftTopEdgeImage/>
            <LeftBottomEdgeImage/>
            <RightTopEdgeImage/>
            <RightBottomEdgeImage/>
        </EdgeContainer>
    );
}
