import type { Metadata } from "next"
import React, { JSX } from "react"
import ThemeProvider from "@design-system/theme/ThemeProvider"
// import CommandDialogProvider from "@design/commandDialog/CommandDialogProvider"
import { MainLayout } from "@design-system/components"
// import { commandDialogData, headerItems } from "@/data"
import { headerItems } from "@/data"
import { METADATA } from "@/constants"

export const metadata: Metadata = METADATA.MAIN

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {/*<CommandDialogProvider data={commandDialogData}>*/}
          <MainLayout headerItems={headerItems}>{children}</MainLayout>
          {/*</CommandDialogProvider>*/}
        </ThemeProvider>
      </body>
    </html>
  )
}
