import {ForwardedRef, forwardRef} from "react";
import {AtomStack, AtomStackProps} from "../Atom";


type HStackProps = Omit<AtomStackProps, 'direction'>

const HStack = ({
                    children,
                    ...props
                }: HStackProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <AtomStack ref={ref} direction={'horizontal'} {...props}>{children}</AtomStack>
}

export default forwardRef(HStack)