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
            <Projects/>
            <Skills/>
        </div>
    );
}

export default App;
