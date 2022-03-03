import {useState, useEffect, useRef} from "react";
import './App.css';
import Main from "./pages/main";
import AboutMe from "./pages/aboutMe";
import Projects from "./pages/projects";
import Skills from "./pages/skills";


function App() {

    return (
        <div className="App">
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <div style={{textAlign: "center", color: "dimgray"}}>@Copyright</div>
        </div>
    );
}

export default App;
