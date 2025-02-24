import Typography from "../../typography/Typography"

type Display = {
    display1: Typography,
    display2: Typography,
    display3: Typography,
    display4: Typography,
    display5: Typography,
    display6: Typography
}

type Header = {
    header1: Typography,
    header2: Typography,
    header3: Typography,
    header4: Typography,
    header5: Typography,
    header6: Typography,
    header7: Typography,
    header8: Typography,
    header9: Typography,
    header10: Typography,
    header11: Typography
}

type Body = {
    body1: Typography,
    body2: Typography,
    body3: Typography,
    body4: Typography,
    body5: Typography,
    body6: Typography,
    body7: Typography,
    body8: Typography,
    body9: Typography,
    body10: Typography,
    body11: Typography
}

type Button = {
    button1: Typography,
    button2: Typography,
    button3: Typography,
    button4: Typography,
    button5: Typography
}

type Label = {
    label1: Typography,
    label2: Typography,
    label3: Typography,
    label4: Typography
}

type TypographyTheme = Display & Header & Body & Button & Label

export type {
    Display,
    Header,
    Body,
    Button,
    Label
}

export default TypographyTheme