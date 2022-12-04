import React from "react";
import styled from "styled-components";
import Edge from "./components/Edge";
import {motion} from "framer-motion"

const Card = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;

  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  border-radius: 30px;
  box-shadow: lightgray 5px 5px 20px;
`



export default function Profile() {
    return (
        <motion.div className="Profile"
                    animate={{translateZ: 90}}>
            <Card>
                <Edge/>
            </Card>
        </motion.div>
    );
}
