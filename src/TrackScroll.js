import { Override, motionValue, useTransform } from "framer-motion";

const contentOffsetY = motionValue(0)

// Apply this override to your scroll component
export function TrackScroll(): Override {
    return { contentOffsetY: contentOffsetY,
        onScroll: (event: any) => {
            console.log(contentOffsetY.current)
        },
    }
}

// Apply this override to your parallax layer
export function ParallaxLayer(): Override {
    const y = useTransform(contentOffsetY, [0, -100], [0, 50], {
        clamp: false,
    })
    return {
        y: y,
    }
}