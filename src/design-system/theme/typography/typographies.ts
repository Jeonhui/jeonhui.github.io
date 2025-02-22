import {
    Body,
    Button,
    Display,
    Header,
    Label,
    TypographiesType,
    Typography
} from "@/design-system/theme/type/TypographiesType";

const createTypography = ({
                              fontSize,
                              fontWeight,
                              lineHeight
                          }: Omit<Typography, 'toStyle'>): Typography => {
    return {
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        toStyle: (weight = undefined) => ({
            fontSize: fontSize,
            fontWeight: weight ? weight : fontWeight,
            lineHeight: lineHeight
        })
    }
}

const display: Display = {
    display1: createTypography({
        fontSize: '6rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    }),
    display2: createTypography({
        fontSize: '3.75rem',
        fontWeight: 'bold',
        lineHeight: 1.2,
    }),
    display3: createTypography({
        fontSize: '3rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    }),
    display4: createTypography({
        fontSize: '2.125rem',
        fontWeight: 'bold',
        lineHeight: 1.235,
    }),
    display5: createTypography({
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: 1.334,
    }),
    display6: createTypography({
        fontSize: '1.25rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
};

const header: Header = {
    header1: createTypography({
        fontSize: '4rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    }),
    header2: createTypography({
        fontSize: '3rem',
        fontWeight: 'bold',
        lineHeight: 1.2,
    }),
    header3: createTypography({
        fontSize: '2.5rem',
        fontWeight: 'bold',
        lineHeight: 1.167,
    }),
    header4: createTypography({
        fontSize: '2rem',
        fontWeight: 'bold',
        lineHeight: 1.235,
    }),
    header5: createTypography({
        fontSize: '1.75rem',
        fontWeight: 'bold',
        lineHeight: 1.334,
    }),
    header6: createTypography({
        fontSize: '1.5rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    header7: createTypography({
        fontSize: '1.25rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    header8: createTypography({
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    header9: createTypography({
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    header10: createTypography({
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    header11: createTypography({
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
};

const body: Body = {
    body1: createTypography({
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: 1.5,
    }),
    body2: createTypography({
        fontSize: '0.875rem',
        fontWeight: 'normal',
        lineHeight: 1.571,
    }),
    body3: createTypography({
        fontSize: '0.75rem',
        fontWeight: 'normal',
        lineHeight: 1.333,
    }),
    body4: createTypography({
        fontSize: '0.625rem',
        fontWeight: 'normal',
        lineHeight: 1.6,
    }),
    body5: createTypography({
        fontSize: '0.5rem',
        fontWeight: 'normal',
        lineHeight: 1.6,
    }),
    body6: createTypography({
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.5,
    }),
    body7: createTypography({
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.571,
    }),
    body8: createTypography({
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.333,
    }),
    body9: createTypography({
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    body10: createTypography({
        fontSize: '0.5rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    body11: createTypography({
        fontSize: '0.375rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
};

const button: Button = {
    button1: createTypography({
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.5,
    }),
    button2: createTypography({
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.571,
    }),
    button3: createTypography({
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.333,
    }),
    button4: createTypography({
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
    button5: createTypography({
        fontSize: '0.5rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
};

const label: Label = {
    label1: createTypography({
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: 1.5,
    }),
    label2: createTypography({
        fontSize: '0.875rem',
        fontWeight: 'bold',
        lineHeight: 1.571,
    }),
    label3: createTypography({
        fontSize: '0.75rem',
        fontWeight: 'bold',
        lineHeight: 1.333,
    }),
    label4: createTypography({
        fontSize: '0.625rem',
        fontWeight: 'bold',
        lineHeight: 1.6,
    }),
};


const typography: TypographiesType = {
    ...display,
    ...header,
    ...body,
    ...button,
    ...label,
}

export default typography;