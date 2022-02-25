import React, {useState, useRef} from "react";
import styled from "styled-components";
import {motion,useViewportScroll} from "framer-motion";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;

`

const css = {
    box:{
        width:"450px",
        height:"450px",
        padding: "50px",
        borderRadius: "50px",
        backgroundColor: "white"
    }
}


export default function aboutMe() {
    return (
        <div className="aboutMe" onScroll={ e => console.log(e)}>
            <Container>
            <motion.div
                style={{...css.box}}
                animate={{scale: [0, 1]}}
            > Content </motion.div>
            </Container>
            <motion.div>
                {Array(100)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>{i}</p>
                    ))}
            </motion.div>
        </div>
    );
}
