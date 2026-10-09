import type { Metadata } from "next"
import React from "react"
import localFont from "next/font/local"
import { JetBrains_Mono } from "next/font/google"
import { generateThemeCSS } from "@tac-ui/web/tailwind"
import Providers from "./providers"
import { METADATA } from "@/constants"
import { SiteFooter, SiteHeader } from "@/components"
import "./tokens.css"
import "./globals.css"

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
})

// tac-ui theme tokens (--background, --foreground, --point, ...) for light/dark
const themeCSS = generateThemeCSS()

export const metadata: Metadata = METADATA.MAIN

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${pretendard.variable} ${jetbrains.variable}`}
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
