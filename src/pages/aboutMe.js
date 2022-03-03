import React, {useEffect, Component} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const css = {
    box: {
        padding: "50px",
        borderRadius: "50px",
        backgroundColor: "white"
    }
}


export default function AboutMe() {

    return (
        <div className="aboutMe" onScroll={(e) => {
            console.log(e)
        }}>
            <Container>
                <motion.div
                    style={{...css.box}}
                    animate={{scale: [0, 1]}}
                > Content
                </motion.div>
            </Container>
        </div>
    );
}
