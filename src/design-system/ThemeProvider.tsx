"use client";

import React, {createContext, useContext, useEffect, useState} from "react";
import {ThemeProvider as StyledComponentsThemeProvider} from "styled-components";
import ThemeMode, {ThemeSelectType} from "@/design-system/theme/type/ThemeMode";
import {darkTheme, lightTheme} from "@/design-system/theme";

type ThemeContextType = {
    themeMode: ThemeMode;
    setThemeMode: (themeMode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

type ThemeProviderProps = {
    defaultThemeMode?: ThemeMode
    children: React.ReactNode;
}

export default function ThemeProvider({
                                          defaultThemeMode = 'light',
                                          children,
                                      }: ThemeProviderProps) {
    const themeSelect: ThemeSelectType = {
        light: lightTheme,
        dark: darkTheme
    }

    const [themeMode, setThemeMode] = useState<ThemeMode>(defaultThemeMode ?? 'light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <ThemeContext.Provider value={{themeMode, setThemeMode: setThemeMode}}>
            <StyledComponentsThemeProvider theme={themeSelect[themeMode]}>
                {children}
            </StyledComponentsThemeProvider>
        </ThemeContext.Provider>
    );
}