"use client"

import {useTheme} from "@/design-system/ThemeProvider";

export default function Toggle() {
    const {themeMode, setThemeMode} = useTheme();

    return (
        <button onClick={() => {
            setThemeMode(themeMode == 'light' ? 'dark' : 'light')
        }}>
            {themeMode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
}