"use client"

import ThemeContext, {ThemeContextProps} from "../theme/ThemeContext";
import {useContext} from "react";

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
