import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

function Main() {
    const canvasRef = useRef(null);
    const [canvas_tag, setCanvas_tag] = useState([]);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext();
        setCanvas_tag(canvas);
    },[]);

    console.log(canvas_tag)

    return (
        <canvas className="Main" ref={canvasRef}>
        </canvas>
    );
}

export default Main;
