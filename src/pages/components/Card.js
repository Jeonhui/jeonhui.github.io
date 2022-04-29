import styled from "styled-components";

const CardContainer = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 2px 2px 20px 3px rgb(230, 230, 230);
  transition: all 0.2s linear;
  margin: 0 20px;

  &:hover {
    transform:scale(1.05);
    box-shadow: 2px 2px 20px 2px rgb(230, 230, 230);
  }
`
export default function Card(props) {
    return (
        <CardContainer>
        </CardContainer>
    );
}