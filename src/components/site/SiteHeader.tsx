"use client"

import { useEffect, useState } from "react"
import { Link as NextLink } from "next-view-transitions"
import { usePathname } from "next/navigation"
import { siGithub } from "simple-icons"
import { PROFILE } from "@/data"
import BrandIcon from "../ui/BrandIcon"
import LogoMark from "./LogoMark"

// N9 · Edge-aligned minimal - name left, three text links right; translucent once scrolled.
const NAV = [
  { name: "이력서", href: "/resume" },
  { name: "포트폴리오", href: "/portfolio" },
]

const SiteHeader = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const link =
    "whitespace-nowrap text-sm transition-colors duration-[var(--dur-short)] hover:text-[var(--color-ink)]"

  return (
    <header
      className={`site-header sticky top-0 z-50 border-b transition-[background-color,border-color] duration-[var(--dur-med)] print:hidden ${
        scrolled
          ? "border-[var(--color-rule)] bg-[color-mix(in_oklch,var(--color-paper)_65%,transparent)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <NextLink
          href="/"
          aria-label={`${PROFILE.name} 홈`}
          className="flex items-center rounded-[var(--radius-card)] p-1 -m-1"
        >
          <LogoMark className="h-[18px] w-auto" />
        </NextLink>
        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-7">
          {NAV.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`${link} ${
                pathname === item.href ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]"
              }`}
            >
              {item.name}
            </NextLink>
          ))}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`${link} inline-flex items-center gap-1.5 text-[var(--color-muted)]`}
          >
            <BrandIcon icon={siGithub} className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
