import React from "react";
import styled from "styled-components";

import SFOMIcon from "../source/SFOM.png"
import AppStore from "../source/appstore.png"
import PlayStore from "../source/playstore.png"

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

const AppConatiner = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  margin: 5%;
`

const AppIcon = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
`

const AppTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`

const AppSubTitle = styled.span`
  font-size: 1rem;
`

const AppDescription = styled.div`
  color: gray;
`
const StoreList = styled.div`
    padding-top: 10px;
`

const Store = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 10px;
`

const StoreDescription = styled.div`
  color: gray;
  font-size: 0.8rem;
`

export default function SFOM() {

    return (
        <div className="Portfolio">
            <Card>
                <AppConatiner>
                    <AppIcon src={SFOMIcon}/>
                    <AppTitle>
                        SFOM <AppSubTitle>(Store For Minecraft)</AppSubTitle>
                    </AppTitle>
                    <AppDescription>
                        Mojang사의 minecraft 게임 앱을 더욱 재밌게 즐길 수 있는<br/>
                        유저간 맵, 스킨, 시드 공유 플랫폼
                    </AppDescription>
                    <StoreList>
                        <a href="https://play.google.com/store/apps/details?id=com.newidea.mcpestore&hl=ko&gl=US"><Store
                            src={PlayStore}/></a>
                        <a><Store src={AppStore}/></a>
                        <StoreDescription>
                            (22년 1월 AppStore 출시 예정)
                        </StoreDescription>
                    </StoreList>
                </AppConatiner>
            </Card>
        </div>
    );
}
