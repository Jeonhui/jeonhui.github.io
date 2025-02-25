import React from "react";
import {clsx} from "clsx";
import * as styles from "./styles.css";
import ThemeToggleSwitch from "@/design-system/components/ThemeToggleSwitch";

type MainLayoutProps = {
    scrollable?: boolean;
    children: React.ReactNode;
}

const MainLayout = ({
                        children
                    }: MainLayoutProps) => {
    return (
        <div className={clsx(styles.mainLayout)}>
            <div className={clsx(styles, styles.sideItem, styles.leftSideItem)}>

            </div>
            {children}
            <div className={clsx(styles, styles.sideItem, styles.rightSideItem)}>

            </div>
            <ThemeToggleSwitch className={clsx(styles.themeToggleSwitchContainer)}/>
        </div>
    );
}

export default MainLayout;