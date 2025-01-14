import styled from 'styled-components';
import {useEffect} from "react";

const StyledMask = styled.div`
    width: 80%;
    height: 80%;
    background-color: blue;
    clip-path: url(#clipPath); /* Reference to the clipPath defined in the SVG */
`;

type MaskProps = {
    radius?: number;
    clipPositions?: MaskPosition[];
};

type MaskPosition = {
    x: number;
    y: number;
}

const Mask = ({radius = 0.02, clipPositions}: MaskProps) => {

    const rightCenter = 0.8;
    const bottomCenter = 0.8;

    const createRadius = (x: number, y: number) => {
        return `A${radius},${radius} 0 0 1 ${x},${y}`;
    };

    const createInnerRadius = (x: number, y: number) => {
        return `a${radius},${radius} 0 0 0 ${-radius},${radius} L${x},${y}`;
    };

    useEffect(() => {


        const pos: MaskPosition = {x: 0, y: radius};

        const leftTop = `M${pos.x} ${pos.y} ${createRadius(radius, 0)}`;
        const rightTop = `L${1 - radius},0`;

        const createdPaths = [
            `M0 ${radius} `, // start  arc to top left corner
            `L${1 - radius},0, ${createRadius(1, radius)}`, // top right corner

            `L1,${rightCenter - radius} ${createRadius(1 - radius, rightCenter)}`, // right center
            `L${bottomCenter + radius},${rightCenter} ${createInnerRadius(bottomCenter, rightCenter + radius)}`, // bottom right corner

            `L${bottomCenter},${1 - radius}, ${createRadius(bottomCenter - radius, 1)}`, // bottom right corner
            `L${radius},1, ${createRadius(0, 1 - radius)}`, // bottom left corner
            `L0,${radius}`, // close the path
            'Z', // close path
        ];
    }, []);


    const paths = [
        `M0 ${radius} ${createRadius(radius, 0)}`, // start  arc to top left corner
        `L${1 - radius},0, ${createRadius(1, radius)}`, // top right corner


        `L1,${rightCenter - radius} ${createRadius(1 - radius, rightCenter)}`, // right center
        `L${bottomCenter + radius},${rightCenter} ${createInnerRadius(bottomCenter, rightCenter + radius)}`, // bottom right corner

        `L${bottomCenter},${1 - radius}, ${createRadius(bottomCenter - radius, 1)}`, // bottom right corner
        `L${radius},1, ${createRadius(0, 1 - radius)}`, // bottom left corner
        `L0,${radius}`, // close the path
        'Z', // close path
    ];

    return (
        <>
            <StyledMask>
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
                            <path d={paths.join(' ')} fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </StyledMask>
        </>
    );
};

export default Mask;
