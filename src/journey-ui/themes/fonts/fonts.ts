import {Font} from "../../constants/Font.ts";

const display: { [key: string]: Font } = {
    display1: {
        fontSize: '96px',
        fontHeight: '112px',
        fontWeight: 'bold'
    },
    display2: {
        fontSize: '60px',
        fontHeight: '72px',
        fontWeight: 'bold'
    },
    display3: {
        fontSize: '48px',
        fontHeight: '56px',
        fontWeight: 'bold'
    },
    display4: {
        fontSize: '34px',
        fontHeight: '40px',
        fontWeight: 'bold'
    },
    display5: {
        fontSize: '24px',
        fontHeight: '28px',
        fontWeight: 'bold'
    },
    display6: {
        fontSize: '20px',
        fontHeight: '24px',
        fontWeight: 'bold'
    },
    display7: {
        fontSize: '16px',
        fontHeight: '20px',
        fontWeight: 'bold'
    }
}

const fonts = {
    ...display
}


export default fonts