import {AtomStack, AtomStackProps, AtomText, AtomTextProps} from "../Atom";
import {ForwardedRef, forwardRef, ReactNode, useState} from "react";
import {Property} from "csstype";
import ButtonState from "../../constants/Base/ButtonState.ts";

type MoleculeButtonProps = {
    children?: string
    leftItem?: ReactNode
    rightItem?: ReactNode
    pressBackgroundColor?: Property.BackgroundColor
    hoverBackgroundColor?: Property.BackgroundColor
    pressColor?: Property.Color
    hoverColor?: Property.Color
} & Omit<AtomStackProps, 'direction'>
    & Pick<AtomTextProps, 'color' | 'font' | 'fontWeight'>


const MoleculeButton = ({
                            children,
                            leftItem,
                            rightItem,
                            backgroundColor,
                            pressBackgroundColor,
                            hoverBackgroundColor,
                            onMouseOver,
                            onMouseOut,
                            onMouseDown,
                            onMouseUp,
                            pressColor,
                            hoverColor,
                            color,
                            font,
                            fontWeight,
                            ...props
                        }: MoleculeButtonProps,
                        ref: ForwardedRef<HTMLDivElement>) => {
    const [buttonState, setButtonState] = useState<ButtonState>('default')

    const onMouseOverHandler = () => {
        setButtonState('hover')
        onMouseOver?.()
    }

    const onMouseOutHandler = () => {
        setButtonState('default')
        onMouseOut?.()
    }
    const onMouseDownHandler = () => {
        setButtonState('pressed')
        onMouseDown?.()
    }
    const onMouseUpHandler = () => {
        setButtonState('hover')
        onMouseUp?.()
    }

    return <AtomStack ref={ref}
                      direction={'horizontal'}
                      backgroundColor={
                          buttonState === 'pressed' ? pressBackgroundColor ?? hoverBackgroundColor ?? backgroundColor :
                              buttonState === 'hover' ? hoverBackgroundColor ?? backgroundColor :
                                  backgroundColor
                      }
                      onMouseOver={onMouseOverHandler}
                      onMouseOut={onMouseOutHandler}
                      onMouseUp={onMouseUpHandler}
                      onMouseDown={onMouseDownHandler}
                      {...props}
    >
        {leftItem}
        <AtomText font={font}
                  fontWeight={fontWeight}
                  color={buttonState === 'pressed' ? pressColor ?? hoverColor ?? color :
                      buttonState === 'hover' ? hoverColor ?? color :
                          color}>{children}</AtomText>
        {rightItem}
    </AtomStack>
}

export default forwardRef(MoleculeButton)