import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import star1 from "../source/star1.png";
import star2 from "../source/star2.png";
import star3 from "../source/star3.png";

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translate(0,-50%);
  color: white;
  font-weight: bold;
  font-size: 5rem;
  line-height: 5.2rem;
  cursor: default;
`

const S = styled.span`
  font-size: 7rem;
  &:hover{
    color: dimgray;
  }
`

const css = {
    container: {
        position: "absolute", width: "100%", height: "100%"
    },
    star: {
        position: "absolute", width: "20px", height: "20px", borderRadius: 5,
        backgroundSize: "cover", backgroundPosition: "center"
    }
};

function getRelativeCoordinates(event, referenceElement) {
    const position = {
        x: event.pageX, y: event.pageY
    };

    const offset = {
        left: referenceElement.offsetLeft,
        top: referenceElement.offsetTop,
        width: referenceElement.clientWidth,
        height: referenceElement.clientHeight
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
        offset.left += reference.offsetLeft;
        offset.top += reference.offsetTop;
        reference = reference.offsetParent;
    }

    return {
        x: position.x - offset.left,
        y: position.y - offset.top,
        width: offset.width,
        height: offset.height,
        centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
        centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2)
    };
}

export default function Main() {
    const [mousePosition, setMousePosition] = useState({});
    const containerRef = useRef();

    const handleMouseMove = e => {
        setMousePosition(getRelativeCoordinates(e, containerRef.current));
    };
    useEffect(()=>{},[])

    return (
        <div className="Main">
            <motion.div style={{...css.container}}
                ref={containerRef}
                onMouseMove={e => handleMouseMove(e)}>

                <Title>Hi<br/>I'm<br/><S>J</S><S>e</S><S>o</S><S>n</S><S>h</S><S>u</S><S>i</S> <S>Lee</S></Title>

                <motion.div
                    style={{...css.star, backgroundImage:  `url(${star1})`}}
                    animate={{
                        x: mousePosition.x, y: mousePosition.y
                    }}
                />
                <motion.div
                    style={{...css.star, backgroundImage:  `url(${star2})`}}
                    animate={{
                        x: mousePosition.x, y: mousePosition.y
                    }}
                    transition={{type: "spring", mass: 0.8, damping: 5}}
                />
                <motion.div
                    style={{...css.star, backgroundImage:  `url(${star3})`}}
                    animate={{
                        x: mousePosition.x, y: mousePosition.y
                    }}
                    transition={{type: "spring", mass: 0.6,  damping: 5}}
                />
                <motion.div
                    style={{...css.star, backgroundImage:  `url(${star2})`}}
                    animate={{
                        x: mousePosition.x, y: mousePosition.y
                    }}
                    transition={{type: "spring", mass: 0.4, damping:5}}
                />
                <motion.div
                    style={{...css.star, backgroundImage:  `url(${star3})`}}
                    animate={{
                        x: mousePosition.x, y: mousePosition.y
                    }}
                    transition={{type: "spring", mass: 0.1,  damping: 10}}
                />
            </motion.div>
        </div>
        );
}



