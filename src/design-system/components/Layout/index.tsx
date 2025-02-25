import React from "react";
import * as styles from "./styles.css"
import {clsx} from "clsx";

type LayoutProps = {
    scrollable?: boolean;
    children: React.ReactNode;
}

const Layout = ({
                    scrollable,
                    children
                }: LayoutProps) => {
    return (
        <div className={clsx(styles.layout, {
            [styles.scrollable]: scrollable
        })}>
            {children}
        </div>
    );
}

export default Layout;