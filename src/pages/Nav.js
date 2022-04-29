import styled, {css} from "styled-components";

import logoImg from "../source/logo_nav.png";
import logoHoverImg from "../source/logo_nav_hover.png";

import {useEffect, useState} from "react";

const PageList = styled.ul`
  cursor: default;
  position: absolute;
  display: flex;
  right: 0;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0 100px 0 0;
  background-color: rgb(56, 56, 56);
  border-radius: 5px 0 0 5px;
  transition: width 0.5s, padding 0.5s;
  ${props => props.hide && css`
    padding: 0;
  `
  }
`

const Logo = styled.a`
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translate(0, -50%);
  display: inline-block;
  height: 30px;
  width: 30px;
  background: url(${logoImg}) no-repeat center center;
  background-size: cover;

  &:hover {
    background: url(${logoHoverImg}) no-repeat center center;
    background-size: cover;
  }
`


const Li = styled.li`
  position: relative;
  padding: 0 20px;
  color: rgb(215, 215, 215);

  &:hover {
    color: rgb(245, 245, 245);
  }
`

const A = styled.a`
  display: inline-block;
  height: 100%;
`

const Span = styled.span`
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
`

const HideBtn = styled.li`
  display: inline-block;
  width: 50px;
  padding: 0 20px;
  color: white
`

export default function Nav() {
    const [navHide, setNavHide] = useState(false);
    useEffect(() => {
        console.log(navHide)
    }, [navHide]);
    return (
        <div className="Nav">
            <Logo/>
            <PageList hide={navHide}>
                <HideBtn onClick={() => {
                    setNavHide(!navHide);
                }}></HideBtn>
                <Li><A><Span>Profile</Span></A></Li>
                <Li><A><Span>Portfolio</Span></A></Li>
                <Li><A><Span>Contact</Span></A></Li>
            </PageList>
        </div>
    );
}

