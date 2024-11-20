import layoutStyle, {scrollableLayoutStyle} from "./styles/Layout.css.ts";
import {forwardRef, ForwardedRef, ReactNode, useEffect, useState} from "react";

type LayoutProps = {
    children?: ReactNode
    scrollable?: boolean
    scrollEventHandler?: (scrollYPosition: number) => void
}

const Layout = ({children, scrollable = true, scrollEventHandler}: LayoutProps, ref: ForwardedRef<HTMLDivElement>) => {

    const [scrollYPosition, setScrollYPosition] = useState(0);

    const updateScroll = () => {
        setScrollYPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        scrollable && window.addEventListener('scroll', updateScroll)
    }, []);

    useEffect(() => {
        scrollEventHandler?.(scrollYPosition);
    }, [scrollYPosition]);

    return <div ref={ref} className={!scrollable ? layoutStyle : scrollableLayoutStyle}>
        {children}
    </div>
}

export default forwardRef(Layout);