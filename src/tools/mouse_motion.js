import React, {useState, useRef} from "react";
import {motion} from "framer-motion";
import star1 from "../source/star1.png";
import star2 from "../source/star2.png";
import star3 from "../source/star3.png";


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

export default function MouseMotion() {
    const [mousePosition, setMousePosition] = useState({});
    const containerRef = useRef();

    const handleMouseMove = e => {
        setMousePosition(getRelativeCoordinates(e, containerRef.current));
    };


    return (
        <motion.div
            ref={containerRef}
            style={{...css.container}}
            onMouseMove={e => handleMouseMove(e)}
        >
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
        </motion.div>);
};