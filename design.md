# Design — jeonhui.com

A locked design system for this site. Every page change reads this file first.
Extend or amend it when the system needs to grow; don't override per page.

## Genre
atmospheric — a dark night-sky canvas, plain confident sans display, one warm accent.

## Macrostructure family
- Home: **Marquee Hero** — the name fills the fold over an interactive WebGL starfield;
  no buttons in the fold. Below the fold: first-person intro + text links → experience → project list → code → profile.
- Content pages (`/portfolio`, `/resume`): **Long Document** — one 760px reading column,
  inline section heads stacked above content (never in a left margin), print-friendly.

## Theme (custom · "starlight over a navy-black sky")
Source of truth: `src/app/tokens.css`. tac-ui tokens (`--background`, `--foreground`,
`--point`, …) are mapped onto these, so tac components share the system.

- `--color-paper`   oklch(13% 0.02 265)
- `--color-paper-2` oklch(17% 0.022 265) — elevated surface (cards, details)
- `--color-paper-3` oklch(21% 0.024 265) — hover / chips
- `--color-ink`     oklch(96% 0.008 250)
- `--color-ink-2`   oklch(80% 0.014 255) — body copy
- `--color-muted`   oklch(64% 0.018 258)
- `--color-faint`   oklch(58% 0.018 260) — lowest text tone; ≥ 4.5:1 on paper
- `--color-rule`    oklch(96% 0.012 255 / 0.07)
- `--color-accent`  oklch(80% 0.13 65) — amber, taken from the warm stars
- `--color-accent-ink` oklch(16% 0.03 60) — text on accent fills
- `--color-focus`   oklch(84% 0.12 70)

Axes: dark paper / geometric-sans display / warm accent. Dark only — no light theme.

## Typography
- Display + body: Pretendard Variable (self-hosted, `next/font/local`), display 600, body 400.
- Outlier: JetBrains Mono — **one slot**: the hero star readout.
- Display tracking: −0.03em to −0.055em. Headings are always roman.
- Dates and numbers: body face with `tabular-nums`.

## Spacing
4-pt named scale in `tokens.css` (`--space-3xs` … `--space-3xl`). Section rhythm varies
(`tight` / `normal` / `loose`) — never the same padding on every section.

## Motion
- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1), `--ease-in`, `--ease-in-out`.
- One orchestrated entrance: the hero fades in (opacity only). Nothing else reveals on scroll.
- Starfield: slow auto-spin, drag to rotate with inertia, cursor tilt + depth parallax,
  and a cursor lens that pushes nearby stars outward and warms them toward amber; frozen under
  `prefers-reduced-motion`, paused off-screen and in hidden tabs.

## Microinteractions stance
- Hover = one signal (colour shift or 1px nudge). No scale, no glow shadows on dark.
- Focus rings appear instantly (`:focus-visible`, 2px `--color-focus`).
- Silent success; no toasts.

## CTA voice
- No pill buttons on content pages. Actions are underlined text links (ink, `--color-rule-strong`
  underline that firms to ink on hover). The 404 page keeps one amber fill as the only button.

## Anti-template rules (owner feedback: "too AI-looking")
- No chips / pill tags. Stacks and highlights are plain comma-separated text.
- No big-number stats rows. Numbers live inside sentences.
- No accordion cards. Experience areas are plain headed lists (home shows two points each).
- No slogans. Copy is first-person and factual.
- No em/en dashes in copy or date ranges; use a plain hyphen.
- No middle-dot (·) lists in copy; use commas or line breaks.

## Terminology
Copy is Korean; English only for proper nouns, product/tool names, and the hero HUD.

| Use | Not |
| --- | --- |
| 코쏘 (COCSO) on first mention, then 코쏘 | 주식회사 코쏘, COCSO alone |
| iOS, Android / prose: "iOS와 Android" | AOS, iOS · Android |
| 제약사, CSO, 딜러사 / 제약사 정산, 딜러사 정산 | 정산제약사, 상위 정산 |
| 의약품 정산 SaaS | 정산 시스템, 정산 플랫폼 (mixed) |
| AI 어시스턴트 (product), 에이전트 (the agent process only) | AI 에이전트 for the product |
| CSO용, 제약사용, 관리자용, 일반 회원용 (MCP servers) | client, settler, admin, service |
| 백엔드 (the system), ~ 서버 (a specific server) | 서버 for the whole backend |
| 앱 | 애플리케이션 |
| 리팩터링, 섀도 테이블, 사전 서명 URL, 읽기 전용 | 리팩토링, shadow 테이블, presigned, read-only |
| 백엔드 개발자, 개인정보 보호책임자(CPO) / 소프트웨어 엔지니어 | English job titles |
| Periods: `2023.01 - 2024.06 (18개월)` | `·` separators, em dashes |
| Bullets end in a noun (구현, 해결); summaries end in -습니다 | mixed endings |

## Icons
- UI icons: **lucide-react** only (stroke 1.75), inline with text, never as tiles above cards.
- Brand marks: **simple-icons**, monochrome via currentColor (tech stacks, GitHub, App Store).
- Area icons on experience rows are small, accent-coloured, and sit inline with the title.

## Chrome
- Nav: **N9 edge-aligned minimal** — name left, three text links right; transparent over the sky,
  translucent paper (65%) with a light blur and a rule once scrolled.
- Footer: **Ft2 inline single line** — contact facts only.
- No re-drawn chrome (no fake file bars, browser bars, or terminals).

## What pages MUST share
Name wordmark ("이전희"), tokens, Pretendard, text-link CTA voice, stacked section heads.

## What pages MAY differ on
Macrostructure within the family above. Only Home carries enrichment (the starfield).
