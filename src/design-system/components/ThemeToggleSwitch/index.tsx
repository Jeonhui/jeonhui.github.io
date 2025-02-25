"use client"

import * as styles from "./styles.css";
import {clsx} from "clsx";
import {useIsClient, useTheme} from "../../hooks";
import {DarkModeIcon, LightModeIcon} from "../../assets/icon";

type ThemeToggleSwitchProps = {
    className?: string;
}

const ThemeToggleSwitch = ({className}: ThemeToggleSwitchProps) => {
    const {theme, toggleTheme} = useTheme()
    const isClient = useIsClient();

    return <div className={clsx(className, styles.grid, styles.container, {
                    [styles.light]: isClient && theme === "light",
                    [styles.dark]: isClient && theme === "dark"
                })}>
        <div className={clsx(
            styles.buttonStyle,
            {
                [styles.lightButton]: isClient && theme === "light",
                [styles.darkButton]: isClient && theme === "dark"
            }
        )}
             onClick={toggleTheme}/>
        <div className={clsx(styles.grid, styles.iconContainer)}>
            <LightModeIcon fill={'none'} className={clsx(styles.icon,
                {
                    [styles.lightIcon]: isClient && theme === "light"
                })}/>
            <DarkModeIcon className={clsx(styles.icon, {
                [styles.darkIcon]: isClient && theme === "dark"
            })}/>
        </div>
    </div>
}

export default ThemeToggleSwitch