import React from "react";
import styled from "styled-components";
import Edge from "./components/Edge";

import profile from '../source/profileImg.png'
import github from '../source/GitHub-Mark.png';

const Card = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;

  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  border-radius: 30px;
  box-shadow: lightgray 5px 5px 20px;
`

const TitleContainer = styled.div`
  position: absolute;
  display: inline-block;
  left: calc(2.5rem + 15px);
  top: 2.5rem
`
const Title = styled.span`
  font-weight: bold;
  font-size: 3rem;
`

const SubTitle = styled.span`
  font-size: 1rem;
`

const NameContainer = styled.div`
  position: absolute;
  display: inline-block;
  right: calc(2.5rem + 15px);
  text-align: right;
  bottom: calc(2.5rem + 15px);
  @media screen and (max-width: 880px) {
    right: auto;
    left: calc(2.5rem + 15px);
    text-align: left;
    bottom: calc(3 * 3rem + 2.5rem);
  }
`
const Name = styled.span`
  font-weight: bold;
  font-size: 3rem;
`

const Job = styled.span`
  font-size: 2rem;
`

const ContactContainer = styled.div`
  position: absolute;
  left: calc(2.5rem + 15px);
  bottom: calc(2.5rem + 15px)
`

const ContactLine = styled.div`
  position: relative;
`

const ContactImg = styled.img`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 10px;
`

const ContactDescription = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  font-size: 1.5rem;
  color: gray;
`

const ALink = styled.a`
  text-decoration: none;
`

export default function Main() {
    const copy = (obj) => {
        navigator.clipboard.writeText(obj.target.innerText);
        window.alert("copied!");
    }

    return (
        <div className="Main" onClick={() => {
        }}>
            <Card>
                <Edge/>
                <TitleContainer>
                    <Title>Try it.</Title>
                    <br/>
                    <SubTitle>
                        Do not try to be original,
                        just try to be good.
                    </SubTitle>
                </TitleContainer>

                <NameContainer>
                    <Job>🍎iOS Developer</Job>
                    <br/>
                    <Name>Jeonhui Lee</Name>
                </NameContainer>


                <ContactContainer>
                    <ContactLine onClick={copy}>
                        <ContactImg src={profile}/>
                        <ContactDescription> l06094@gmail.com </ContactDescription>
                    </ContactLine>
                    <ContactLine onClick={copy}>
                        <ContactImg src={profile}/>
                        <ContactDescription> dlwjsgml02@naver.com </ContactDescription>
                    </ContactLine>
                    <ContactLine>
                        <ContactImg src={github}/>
                        <ContactDescription> <ALink href="https://github.com/Jeonhui" target="_blank"> @Jeonhui </ALink>
                        </ContactDescription>
                    </ContactLine>
                </ContactContainer>
            </Card>
        </div>
    );
}
