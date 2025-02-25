import {globalStyle} from "@vanilla-extract/css";
import {theme} from "./theme.css"

globalStyle("*", {
    margin: 0,
    padding: 0
})

globalStyle("body", {
    minHeight: '100svh',
    backgroundColor: theme.colors.background
})