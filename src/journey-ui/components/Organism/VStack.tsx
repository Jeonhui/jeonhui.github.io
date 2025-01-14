import {ForwardedRef, forwardRef} from "react";
import {AtomStack, AtomStackProps} from "../Atom";


type VStackProps = Omit<AtomStackProps, 'direction'>

const VStack = ({
                    children,
                    ...props
                }: VStackProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <AtomStack ref={ref} direction={'vertical'} {...props}>{children}</AtomStack>
}

export default forwardRef(VStack)