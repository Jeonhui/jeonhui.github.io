import {theme} from "../../theme/theme.css";
import {style} from "@vanilla-extract/css";

const lightColor = theme.colors.gray50
const darkColor = theme.colors.gray800

export const grid = style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    alignContent: "center",
    padding: "0.4rem",
    boxSizing: "border-box",
});

export const container = style({
    position: "relative",
    width: "5.6rem",
    height: "2.8rem",
    borderRadius: "2rem",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.1)'
});

export const light = style({
    backgroundColor: lightColor
});

export const dark = style({
    backgroundColor: darkColor,
});

export const buttonStyle = style({
    position: "relative",
    height: "100%",
    aspectRatio: "1",
    boxSizing: "border-box",
    borderRadius: "50%",
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
    zIndex: 1,
});

export const darkButton = style({
    transform: "translateX(0%)",
    backgroundColor: lightColor,
});

export const lightButton = style({
    transform: "translateX(100%)",
    backgroundColor: darkColor,
});

export const iconContainer = style({
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    justifyItems: "center",
})

export const icon = style({
    opacity: 0,
    height: "100%",
    aspectRatio: "1",
    transition: "opacity 0.3s ease-in-out",
})

export const lightIcon = style({
    opacity: 1,
    fill: darkColor
})

export const darkIcon = style({
    opacity: 1,
    fill: lightColor,
    paddingLeft: '0.28rem'
})