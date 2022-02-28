import React, {useState, useRef} from "react";
import styled from "styled-components";
import {motion,useViewportScroll} from "framer-motion";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const css = {
    box:{
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
                {Array(10)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>{i}</p>
                    ))}
            </motion.div>
        </div>
    );
}
