import './App.css';
import './styles.css';
import styled from "styled-components";
import Nav from "./pages/Nav";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const Hr = styled.div`
  position: relative;
  height: 0;
  left: 10%;
  width: 80%;
  overflow: visible;
`
const Hrline = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: rgb(220, 220, 220);
  z-index: 10;
`

function App() {
    return (
        <div className="App">

            <Main/>
            <Hr><Hrline/></Hr>
            <Profile/>
            <Hr><Hrline/></Hr>
            <Portfolio/>
            <Hr><Hrline/></Hr>
            <Contact/>
        </div>
    );
}

export default App;
