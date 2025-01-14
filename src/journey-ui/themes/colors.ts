import Color from "../constants/Base/Color.ts";

const primaryBlue: { [key: string]: Color } = {
    primary900: '#1E0B4E',
    primary800: '#182170',
    primary700: '#123791',
    primary600: '#0C4DB2',
    primary500: '#0763D3',
    primary400: '#017AF5',
    primary300: '#3494F7',
    primary200: '#67AFF9',
    primary100: '#9ACAFB',
    primary50: '#CCE5FD'
}

const gray: { [key: string]: Color } = {
    black: '#000000',
    white: '#FFFFFF',
    gray900: '#242426',
    gray800: '#3A3A3C',
    gray700: '#505051',
    gray600: '#666667',
    gray500: '#7C7C7D',
    gray400: '#929293',
    gray300: '#A8A8A8',
    gray200: '#BDBDBE',
    gray100: '#D4D4D4',
    gray50: '#EAEAEA'
}

const systemRed: { [key: string]: Color } = {
    systemRed900: '#911124',
    systemRed800: '#91282C',
    systemRed700: '#A92B35',
    systemRed600: '#C12D3D',
    systemRed500: '#D82F45',
    systemRed400: '#F0324E',
    systemRed300: '#F35B71',
    systemRed200: '#F68495',
    systemRed100: '#F9ADB8',
    systemRed50: '#FCD6DC'
}

const systemYellow: { [key: string]: Color } = {
    systemYellow900: '#E5A501',
    systemYellow800: '#EAAB12',
    systemYellow700: '#EFB224',
    systemYellow600: '#F5B836',
    systemYellow500: '#FABF47',
    systemYellow400: '#FFC659',
    systemYellow300: '#FFD17A',
    systemYellow200: '#FFDD9B',
    systemYellow100: '#FFE8BD',
    systemYellow50: '#FFF4DE'
}

const systemGreen: { [key: string]: Color } = {
    systemGreen900: '#028928',
    systemGreen800: '#0F9440',
    systemGreen700: '#1C9F58',
    systemGreen600: '#29AB71',
    systemGreen500: '#36B688',
    systemGreen400: '#43C2A1',
    systemGreen300: '#69CEB4',
    systemGreen200: '#8EDAC7',
    systemGreen100: '#B4E7DA',
    systemGreen50: '#DAF3ED'
}

const primaryColors: { [key: string]: Color } = {
    primaryBlue: primaryBlue.primary500,
}

const colors = {
    ...primaryColors,
    ...primaryBlue,
    ...gray,
    ...systemRed,
    ...systemYellow,
    ...systemGreen
}

export default colors