import {
    ColorsType,
    Gray,
    PrimaryBlue,
    PrimaryColor,
    SystemGreen,
    SystemRed,
    SystemYellow
} from "@/design-system/theme/type/ColorsType";


const primaryBlueDark: PrimaryBlue = {
    primary900: '#CCE5FD',
    primary800: '#9ACAFB',
    primary700: '#67AFF9',
    primary600: '#3494F7',
    primary500: '#017AF5',
    primary400: '#0763D3',
    primary300: '#0C4DB2',
    primary200: '#123791',
    primary100: '#182170',
    primary50: '#1E0B4E'
}

const grayDark: Gray = {
    black: '#FFFFFF',
    white: '#000000',
    gray900: '#EAEAEA',
    gray800: '#D4D4D4',
    gray700: '#BDBDBE',
    gray600: '#A8A8A8',
    gray500: '#929293',
    gray400: '#7C7C7D',
    gray300: '#666667',
    gray200: '#505051',
    gray100: '#3A3A3C',
    gray50: '#242426'
}


const systemRedDark: SystemRed = {
    systemRed900: '#FCD6DC',
    systemRed800: '#F9ADB8',
    systemRed700: '#F68495',
    systemRed600: '#F35B71',
    systemRed500: '#F0324E',
    systemRed400: '#D82F45',
    systemRed300: '#C12D3D',
    systemRed200: '#A92B35',
    systemRed100: '#91282C',
    systemRed50: '#911124'
}

const systemYellowDark: SystemYellow = {
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

const systemGreenDark: SystemGreen = {
    systemGreen900: '#DAF3ED',
    systemGreen800: '#B4E7DA',
    systemGreen700: '#8EDAC7',
    systemGreen600: '#69CEB4',
    systemGreen500: '#43C2A1',
    systemGreen400: '#36B688',
    systemGreen300: '#29AB71',
    systemGreen200: '#1C9F58',
    systemGreen100: '#0F9440',
    systemGreen50: '#028928'
}

const primaryColorDark: PrimaryColor = {
    primaryBlue: primaryBlueDark.primary500,
}

const darkColors: ColorsType = {
    ...primaryColorDark,
    ...primaryBlueDark,
    ...grayDark,
    ...systemRedDark,
    ...systemYellowDark,
    ...systemGreenDark
}

export default darkColors