import {Property} from "csstype";

import FontWeight = Property.FontWeight;
import FontSize = Property.FontSize;
import LineHeight = Property.LineHeight;

type TypographyCss = {
    fontSize: FontSize
    fontWeight: FontWeight
    lineHeight: LineHeight
}

type Display = {
    display1: TypographyCss,
    display2: TypographyCss,
    display3: TypographyCss,
    display4: TypographyCss,
    display5: TypographyCss,
    display6: TypographyCss
}

type Header = {
    header1: TypographyCss,
    header2: TypographyCss,
    header3: TypographyCss,
    header4: TypographyCss,
    header5: TypographyCss,
    header6: TypographyCss,
    header7: TypographyCss,
    header8: TypographyCss,
    header9: TypographyCss,
    header10: TypographyCss,
    header11: TypographyCss
}

type Body = {
    body1: TypographyCss,
    body2: TypographyCss,
    body3: TypographyCss,
    body4: TypographyCss,
    body5: TypographyCss,
    body6: TypographyCss,
    body7: TypographyCss,
    body8: TypographyCss,
    body9: TypographyCss,
    body10: TypographyCss,
    body11: TypographyCss
}

type Button = {
    button1: TypographyCss,
    button2: TypographyCss,
    button3: TypographyCss,
    button4: TypographyCss,
    button5: TypographyCss
}

type Label = {
    label1: TypographyCss,
    label2: TypographyCss,
    label3: TypographyCss,
    label4: TypographyCss
}

export type {TypographyCss}

export type {
    Display,
    Header,
    Body,
    Button,
    Label
}

type Typography = {
    [key in keyof TypographyCss]: string
}

type TypographyTheme = {
    [key in keyof (Display & Header & Body & Button & Label)]: Typography
}

export type {Typography}
export type {TypographyTheme}