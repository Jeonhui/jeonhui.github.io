import React from "react";
import './App.css';
import './styles.css';
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <Main/>
            <Profile/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default App;
