import { NextComponentType } from "next";
import { memo } from "react";
import { default as SignatureSvg } from "@assets/icon/Signature.svg";
import styled, { keyframes } from "styled-components";

type StyledSignatureAnimationProps = {
  strokeDashoffset: number;
};

const StyledSignatureAnimation = ({
  strokeDashoffset,
}: StyledSignatureAnimationProps) => keyframes`
  100% {
    stroke-dashoffset: ${strokeDashoffset};
  }
  0% {
    stroke-dashoffset: 0;
  }
`;

const StyledSignature = styled(SignatureSvg)`
  color: red;
  width: 1024px;
  height: 512px;
  filter: drop-shadow(0px 0px 18px rgba(256, 256, 256, 0.8));

  &:nth-child(1) {
    stroke-dasharray: 3650;
    stroke-dashoffset: 3650;
    animation: ${StyledSignatureAnimation({ strokeDashoffset: 3650 })} 2.5s
      linear 0s forwards;
  }
  &:nth-child(2) {
    stroke-dasharray: 9;
    stroke-dashoffset: 9;
    animation: ${StyledSignatureAnimation({ strokeDashoffset: 9 })} 0.06s linear
      2.8s forwards;
  }
`;

const Signature: NextComponentType = () => {
  return <StyledSignature></StyledSignature>;
};

export default memo(Signature);
