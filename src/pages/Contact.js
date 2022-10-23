import React from "react";
import styled from "styled-components";

export default function Contact() {
    const Footer = styled.div`
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: rgb(230, 230, 230);
      width: 100%;
      height: 50%;
    `
    return (
        <div className="Contact">
            <Footer></Footer>
        </div>
    );
}
