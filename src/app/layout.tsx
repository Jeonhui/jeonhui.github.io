import type {Metadata} from "next";
import React from "react";
import {ThemeProvider} from "@/design-system/theme/ThemeProvider";
import MainLayout from "@/design-system/components/MainLayout";

export const metadata: Metadata = {
    title: "Jeonhui | iOS Developer",
    description: "Personal Page(Blog & Portfolio)",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
        <body>
        <ThemeProvider>
            <MainLayout>
                {children}
            </MainLayout>
        </ThemeProvider>
        </body>
        </html>
    );
}
