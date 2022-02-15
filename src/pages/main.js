import React, {useState, useEffect, useRef} from "react";
import styled,{keyframes} from "styled-components";
import {motion} from "framer-motion";
import star1 from "../source/star1.png";
import star2 from "../source/star2.png";
import star3 from "../source/star3.png";


const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 4rem;
  transform: translate(0, -50%);
  color: white;
  font-weight: bold;
  font-size: 3rem;
  line-height: 4rem;
  cursor: default;
`


const S = styled(motion.div)`
  display: inline-block;
  padding-top: 4rem;
  color: rgb(245, 224, 128);
`
const Develop = styled(motion.div)`
  display: inline-block;
  color: rgb(132,162,187);
`

const updown_animation = keyframes`
  0%{
    bottom: 1rem;
  }
  50%{
    bottom: 1.5rem;
  }100%{
     bottom: 1rem;
   }
`

const ScrollDown = styled.div`
  position: absolute;
  color: rgb(231,230,237);
  transform: rotate(90deg) translate(-50%,-100%);
  bottom: 1rem;
  right: 1rem;
  animation: ${updown_animation} 2s 1s infinite linear alternate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
`

const css = {
    container: {
        position: "absolute", width: "100%", height: "100%"
    }, star: {
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: 5,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
};

const variants = {
    active: {scale: [1, 1.1, 1]},
    hovering: {scale: [1, 1.1, 1], transition: {duration: 0.5, delay: 0}}
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
    const name = ['J', 'e', 'o', 'n', 'h', 'u', 'i', "_", 'L', 'e', 'e']

    const handleMouseMove = e => {
        setMousePosition(getRelativeCoordinates(e, containerRef.current));
    };

    useEffect(() => {
    }, [])

    return (<div className="Main"
                 ref={containerRef} onMouseMove={e => handleMouseMove(e)}>
        <motion.div style={{...css.container}}>
            <motion.div
                style={{...css.star, backgroundImage: `url(${star1})`}}
                animate={{
                    x: mousePosition.x, y: mousePosition.y
                }}
            />
            <motion.div
                style={{...css.star, backgroundImage: `url(${star2})`}}
                animate={{
                    x: mousePosition.x, y: mousePosition.y
                }}
                transition={{type: "spring", mass: 0.8, damping: 5}}
            />
            <motion.div
                style={{...css.star, backgroundImage: `url(${star3})`}}
                animate={{
                    x: mousePosition.x, y: mousePosition.y
                }}
                transition={{type: "spring", mass: 0.6, damping: 5}}
            />
            <motion.div
                style={{...css.star, backgroundImage: `url(${star2})`}}
                animate={{
                    x: mousePosition.x, y: mousePosition.y
                }}
                transition={{type: "spring", mass: 0.4, damping: 5}}
            />
            <motion.div
                style={{...css.star, backgroundImage: `url(${star3})`}}
                animate={{
                    x: mousePosition.x, y: mousePosition.y
                }}
                transition={{type: "spring", mass: 0.1, damping: 10}}
            />
        </motion.div>

        <Title>
            <div>Hi</div>

            <div>I'm {''}
                <Develop
                    animate={{
                        y: [1, -30, 1]
                    }}
                    transition={{delay: 0.8}}
                >{'{'}Developer{'}'}</Develop>
            </div>

            <div style={{fontSize:"10rem",fontFamily:"MeowScript"}}>
                {name.map((ch, idx) =>
                    ch !== "_" ?<S
                        key={idx}
                        variants={variants}
                    animate={"active"}
                    whileHover={"hovering"}
                    transition={{delay: idx / 10}}
                >{ch}</S>: <S key={idx} style={{width:"2rem"}}/>
                )}
            </div>
        </Title>
        <ScrollDown>scroll Down ⦊⦊⦊</ScrollDown>
    </div>);
}



