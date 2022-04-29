import styled from "styled-components";
import Card from "./components/Card";

const CardListContainer = styled.div`
  position: absolute;
  height: 200px;
  top: 50%;
  width: 80%;
  left: 50%;
  transform: translate(-50%);
  
`
export default function CardList() {
    return (
        <CardListContainer>
            <Card/>
            <Card/>
            <Card/>
        </CardListContainer>
    );
}