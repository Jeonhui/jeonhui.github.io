import React from "react";
import styled, {css} from "styled-components";
import iphoneImg from "../../source/iphone12pro_3:4.png";
import profileImg from "../../source/profileImg.png";
import {useEffect, useState} from "react";

const Iphonea = styled.div`
  position: absolute;
  bottom: ${(props) => props.height > 650 ? 0 : ("-" + (650 - props.height).toString() + "px")};
  right: 150px;
  width: 381px;
  height: 587.25px;
  transition: bottom 2s;
  ${props => !props.load && css`
    bottom: -381px;
  `};

  @media screen and (max-width: 1000px) {
    right:5px;
  }
  
  @media screen and (max-width: 768px) {
    right: 50%;
    transform: translate(50%, 0);
    bottom: ${(props) => props.height > 650 ? "-100px" : ("-" + (650 - props.height + 100).toString() + "px")};
  }
`
const IphoneImg = styled.div`
  position: absolute;
  background: url(${iphoneImg}) center center;
  background-size: cover;
  z-index: 2;
  width: 100%;
  height: 100%;
`

const Screen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 381px;
  height: 587.25px;
`
const ScreenTop = styled.div`
  position: relative;
  border-radius: 35px 35px 0 0;
  background-color: rgba(235, 235, 235, 1);
  border-bottom: rgba(215, 215, 215, 1) 1px solid;
  z-index: 1;
  width: 370px;
  left: 50%;
  transform: translate(-50%, 0);
`
const ScreenTopProfile = styled.div`
  position: relative;
  height: 80px;
`
const ProfileImg = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: lightgray;
  background: url(${profileImg}) center center;
  background-size: cover;
  left: 50%;
  transform: translate(-50%, 0);
`
const ProfileName = styled.div`
  position: absolute;
  text-align: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: lighter;
  padding: 5px;
`

const ScreenNotification = styled.div`
  height: 45px;
  border-radius: inherit;
  margin-bottom: 10px;
`

const Time = styled.span`
  position: relative;
  top: 50%;
  transform: translate(-100%, -50%);
  left: 40px;
  font-weight: 500;
`
const MessageBox = styled.div`
  position: relative;
  width: 100%;
  z-index: 3;
  margin-top: 10px;
`

const Message = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  font-weight: 400;
`

const MyMessage = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 30px;
  right: 25px;
  padding: 5px 12px;
  color: white;
  background-color: dodgerblue;
  transition: all 0.2s linear;
  text-align: right;


`

const YourMessage = styled.div`
  display: inline-block;
  position: absolute;
  border-radius: 30px;
  top: 50%;
  transform: translate(0, -50%);
  left: 25px;
  padding: 5px 12px;
  background-color: lightgray;
  transition: all 0.2s linear;
`

const MessageTime = styled.div`
  text-align: center;
  font-size: 0.7rem;
  color: rgba(150, 150, 150, 1);
`


export default function Iphone(props) {
    let today = new Date();
    const [Wheight, setWheight] = useState(window.innerHeight);
    window.addEventListener("resize", () => {
        setWheight(window.innerHeight);

    })

    useEffect(() => {
        console.log(Wheight);
        console.log(("-" + (650 - Wheight).toString() + "px"));
    }, [Wheight])

    return (
        <Iphonea load={props.load} height={Wheight}>
            <Screen>
                <IphoneImg/>
                <ScreenTop>
                    <ScreenNotification>
                        <Time>{
                            (today.getHours() < 10 ? '0' : '') + today.getHours() + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()
                        }</Time>
                    </ScreenNotification>
                    <ScreenTopProfile>
                        <ProfileImg/>
                        <ProfileName>who</ProfileName>
                    </ScreenTopProfile>
                </ScreenTop>
                <MessageBox>
                    <MessageTime>iMessage<br/>(오늘){(today.getHours() < 10 ? '0' : '') + today.getHours() + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()
                    }</MessageTime>
                    <Message><YourMessage>Hi!</YourMessage></Message>
                    <Message><MyMessage>Hi, I'm Jeonhui Lee</MyMessage></Message>
                    <Message><MyMessage>It's my portfolio website</MyMessage></Message>
                    <Message><MyMessage>IOS Developere</MyMessage></Message>
                </MessageBox>
            </Screen>
        </Iphonea>
    );
}

