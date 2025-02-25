import {
    Body,
    Button,
    Display,
    Header,
    Label,
    TypographyTheme
} from "./TypographyTheme";

const display: Display = {
    display1: {
        fontSize: '6rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    },
    display2: {
        fontSize: '3.75rem',
        fontWeight: 'bold',
        lineHeight: 1.2,
    },
    display3: {
        fontSize: '3rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    },
    display4: {
        fontSize: '2.125rem',
        fontWeight: 'bold',
        lineHeight: 1.235,
    },
    display5: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: 1.334,
    },
    display6: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
};

const header: Header = {
    header1: {
        fontSize: '4rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    },
    header2: {
        fontSize: '3rem',
        fontWeight: 'bold',
        lineHeight: 1.2,
    },
    header3: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    },
    header4: {
        fontSize: '2rem',
        fontWeight: 'bold',
        lineHeight: 1.235,
    },
    header5: {
        fontSize: '1.75rem',
        fontWeight: 'bold',
        lineHeight: 1.334,
    },
    header6: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    header7: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    header8: {
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    header9: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    header10: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    header11: {
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
};

const body: Body = {
    body1: {
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: 1.5,
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 'normal',
        lineHeight: 1.571,
    },
    body3: {
        fontSize: '0.75rem',
        fontWeight: 'normal',
        lineHeight: 1.333,
    },
    body4: {
        fontSize: '0.625rem',
        fontWeight: 'normal',
        lineHeight: 1.6,
    },
    body5: {
        fontSize: '0.5rem',
        fontWeight: 'normal',
        lineHeight: 1.6,
    },
    body6: {
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.5,
    },
    body7: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.571,
    },
    body8: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.333,
    },
    body9: {
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    body10: {
        fontSize: '0.5rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    body11: {
        fontSize: '0.375rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
};

const button: Button = {
    button1: {
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.5,
    },
    button2: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.571,
    },
    button3: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.333,
    },
    button4: {
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
    button5: {
        fontSize: '0.5rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
};

const label: Label = {
    label1: {
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.5,
    },
    label2: {
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.571,
    },
    label3: {
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.333,
    },
    label4: {
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    },
};

const typographyTheme: TypographyTheme = {
    ...display,
    ...header,
    ...body,
    ...button,
    ...label,
}

export default typographyTheme;