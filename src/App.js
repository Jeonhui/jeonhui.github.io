import './App.css';
import {useRef} from "react";
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
        </div>
    );
}

export default App;
