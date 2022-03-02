import {useState, useEffect, useRef} from "react";
import './App.css';
import Main from "./pages/main";
import AboutMe from "./pages/aboutMe";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import styled from "styled-components";

const H = styled.hr`
  height: 0;
  border: none;
`


function App() {
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const scrollRefs = [useRef(), useRef(), useRef()]

    const handleFollow = () => {
        setScrollY(window.scrollY); // window 스크롤 값을 ScrollY에 저장
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
    })

    window.addEventListener("scroll", (e) => {
        console.log(window.scrollY);
    });

    return (
        <div className="App">
            <Main/>
            <H ref={scrollRefs[0]}/>
            <AboutMe/>
            <H ref={scrollRefs[1]}/>
            <Skills/>
            <H ref={scrollRefs[2]}/>
            <Projects/>
            <div style={{textAlign: "center", color: "dimgray"}}>@Copyright</div>
        </div>
    );
}

export default App;
