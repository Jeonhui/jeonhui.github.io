import styled, {css} from "styled-components";

import logoImg from "../source/logo_nav.png";
import logoHoverImg from "../source/logo_nav_hover.png";
import hamburger from "../source/hamburger.png";
import cancel from "../source/cancel.png";

const NavContainer = styled.div`
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 40px;
`

const Navbar = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(56, 56, 56);
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavList = styled.ul`
  position: absolute;
  left: 50%;
  height: 100%;
  transform: translate(-50%, 0);
`
const NavLi = styled.li`
  position: relative;
  display: inline-block;
  height: 100%;
  margin: 0 10px;
  font-size: 0.8rem;
  color: rgb(215, 215, 215);

  &:hover {
    color: rgb(245, 245, 245);
  }
`

const NavA = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
`

const NavSpan = styled.span`
  position: absolute;
  font-weight: lighter;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Logo = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  background: url(${logoImg}) no-repeat center center;
  background-size: cover;

  &:hover {
    background: url(${logoHoverImg}) no-repeat center center;
    background-size: cover;
  }
`

const HamburgerMenu = styled.div`
  position: absolute;
  display: inline-block;
  margin: 5px;
  width: 35px;
  height: 35px;
  background: url(${hamburger}) no-repeat center center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export default function Nav() {
    return (
        <NavContainer>
            <Navbar>
                <NavList>
                    <NavLi style={{width: "2rem"}}><Logo/></NavLi>
                    <NavLi style={{width: "2.5rem"}}><NavA><NavSpan>Main</NavSpan></NavA></NavLi>
                    <NavLi style={{width: "3rem"}}><NavA><NavSpan>Profile</NavSpan></NavA></NavLi>
                    <NavLi style={{width: "4rem"}}><NavA><NavSpan>Portfolio</NavSpan></NavA></NavLi>
                    <NavLi style={{width: "3.5rem"}}><NavA><NavSpan>Contect</NavSpan></NavA></NavLi>
                </NavList>
            </Navbar>
            <HamburgerMenu/>
        </NavContainer>
    );
}

