import styled from "styled-components";
import Iphone from "./components/Iphone";
import {useState} from "react";

const TitleBox = styled.div`
  position: absolute;
  left: 100px;
  top: 40%;
  transform: translate(0, -50%);
`

const Title = styled.div`
  font-weight: 600;
  font-size: 4rem;
`
const SubTitle = styled.pre`
  font-family: sans-serif,serif;
  font-weight: 300;
  font-size: 2rem;
  text-align: right;
`

const Btn = styled.button`
  border: none;
  width: 100%;
  text-align: right;
  font-size: 1.5rem;
  background-color: rgba(0,0,0,0);
  color: dodgerblue;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover{
    text-decoration: underline;
  }
`

export default function Main() {
    const [load, setLoad] = useState(false);
    console.log(load)
    window.addEventListener("load", () => {
        setLoad(true);
    });
    return (
        <div className="Main" onClick={() => {
            console.log(load)
        }}>
            <TitleBox>
                <Title>Try it.</Title>
                <SubTitle>Do not try to be original,
                    <br/>
                    just try to be good.</SubTitle>
                <div style={{width:"100%"}}><Btn>Profile</Btn></div>
            </TitleBox>
            <Iphone load={load}/>
        </div>
    );
}
