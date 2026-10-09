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
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-card)] focus:bg-[var(--color-paper-3)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-ink)]"
          >
            본문으로 건너뛰기
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
