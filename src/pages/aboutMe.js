import React, {useState, useRef} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import "../TrackScroll";
import {TrackScroll} from "../TrackScroll";

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
        <div className="aboutMe">
            <Container>
            <motion.div
                style={{...css.box}}
                animate={{scale: [0, 1]}}
            > Content </motion.div>
            </Container>
        </div>
    );
}
