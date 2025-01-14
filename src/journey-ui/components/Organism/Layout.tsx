import {ForwardedRef, forwardRef} from "react";
import {AtomLayout, AtomLayoutProps} from "../Atom";


type LayoutProps = AtomLayoutProps

const Layout = ({
                    children,
                    ...props
                }: LayoutProps, ref: ForwardedRef<HTMLDivElement>) => {
    return <AtomLayout ref={ref} {...props}>{children}</AtomLayout>
}

export default forwardRef(Layout)