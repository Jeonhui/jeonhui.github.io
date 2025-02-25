import {globalStyle} from "@vanilla-extract/css";
import {theme} from "./theme.css"

globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
})

globalStyle("body", {
    height: '100svh',
    backgroundColor: theme.colors.bodyBackground,
    transition: "background-color 0.3s ease-in-out",
    color: theme.colors.text
})