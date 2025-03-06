import type { Metadata } from "next"
import React, { JSX } from "react"
import { ThemeProvider } from "@/design-system/theme/ThemeProvider"
import MainLayout from "@/design-system/components/MainLayout"
import CommandDialogProvider from "@design/commandDialog/CommandDialogProvider"
import commandDialogData from "../data/command-dialog.json"

export const metadata: Metadata = {
  title: "Jeonhui | iOS Developer",
  description: "Personal Page(Blog & Portfolio)",
  icons: ["favicon.png"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CommandDialogProvider data={commandDialogData}>
            <MainLayout>{children}</MainLayout>
          </CommandDialogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
