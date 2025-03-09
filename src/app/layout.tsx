import type { Metadata } from "next"
import React, { JSX } from "react"
import { ThemeProvider } from "@/design-system/theme/ThemeProvider"
import MainLayout from "@/design-system/components/MainLayout"
import CommandDialogProvider from "@design/commandDialog/CommandDialogProvider"
import commandDialogData from "../data/command-dialog.json"
import headerItem from "../data/header-item.json"
import { INFO } from "@/constants"

export const metadata: Metadata = {
  metadataBase: new URL(INFO.BASE_URL),
  title: INFO.TITLE,
  description: INFO.DESCRIPTION,
  icons: [INFO.FAVICON],
  openGraph: {
    title: INFO.TITLE,
    description: INFO.DESCRIPTION,
    type: "website",
    images: [INFO.PREVIEW_IMAGE],
  },
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
            <MainLayout
              headerItems={{
                ...headerItem,
              }}
            >
              {children}
            </MainLayout>
          </CommandDialogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
