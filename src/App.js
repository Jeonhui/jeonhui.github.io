import React from "react";
import { motion, useScroll } from "framer-motion"

import './App.css';
import './styles.css';
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import SFOM from "./pages/SFOM";

function App() {
    return (
        <div className="App">
            <Main/>
            <Profile/>
            <SFOM/>
        </div>
    );
}

export default App;
