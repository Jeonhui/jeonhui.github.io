import type { Metadata } from "next"
import React from "react"
import { ViewTransitions } from "next-view-transitions"
import Providers from "./providers"
import { METADATA } from "@/constants"
import { SiteFooter, SiteHeader } from "@/components"
// Pretendard split by unicode-range: the browser downloads only the subsets a page uses.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
import "./tokens.css"
import "./globals.css"

export const metadata: Metadata = METADATA.MAIN

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Page changes animate with the View Transitions API where supported.
    <ViewTransitions>
      <html lang="ko" suppressHydrationWarning>
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
    </ViewTransitions>
  )
}
