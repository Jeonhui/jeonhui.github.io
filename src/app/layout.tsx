import type {Metadata} from "next";
import "./styles/globals.css";
import React from "react";
import ThemeProvider from "@/design-system/ThemeProvider";

export const metadata: Metadata = {
    title: "Jeonhui Dev",
    description: "Blog & Portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
