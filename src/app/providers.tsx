"use client"

import React from "react"
import { TacProvider } from "@tac-ui/web"

export default function Providers({ children }: { children: React.ReactNode }) {
  return <TacProvider defaultTheme="dark">{children}</TacProvider>
}
