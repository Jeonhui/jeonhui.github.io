# Design — jeonhui.com

A locked design system for this site. Every page change reads this file first.
Extend or amend it when the system needs to grow; don't override per page.

## Genre
atmospheric — a dark night-sky canvas, plain confident sans display, one warm accent.

## Macrostructure family
- Home: **Marquee Hero** — the name fills the fold over an interactive WebGL starfield, one line of
  copy and a single "포트폴리오 보기" text link (the only portfolio CTA on the page).
  Below the fold: first-person intro → experience (areas in 2 columns) → projects (one featured
  full-width, then a 2-column pair) → code → profile.
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
- Display + body: Pretendard Variable via the `pretendard` package's **dynamic subset** CSS
  (unicode-range split, ~430 KB loaded instead of 2 MB). Display 600, body 400.
- No outlier face in use (the hero telemetry strip was removed per taste-skill: decorative text strip).
- Display tracking: −0.03em to −0.055em. Headings are always roman.
- Dates and numbers: body face with `tabular-nums`.

## Spacing
4-pt named scale in `tokens.css` (`--space-3xs` … `--space-3xl`). Section rhythm varies
(`tight` / `normal` / `loose`) — never the same padding on every section.

## Motion
- Easing: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1) everywhere (CSS and framer-motion).
- Hero (load): stars converge from 3.2x spread into the cluster (~2.4s, staggered per star);
  the name settles from weight 200 to 600 letter by letter; copy fades up after it.
  The name is the LCP element, so it is never hidden, only its weight animates.
- Hero (scroll): the camera dollies into the cluster and dims it; the copy drifts up and fades.
- Hero (cursor): lens pushes nearby stars outward and warms them; depth parallax; letters near
  the cursor swell along the variable weight axis (fine pointers only).
- Below the fold, each reveal plays once and only where it adds meaning:
  section titles slide up through a mask, project screenshots open from an inset clip,
  the COCSO diagram reveals boxes in reading order and then draws its arrows.
  No generic fade-up on every block.
- `prefers-reduced-motion`: starfield frozen at its settled state, no weight animation,
  no parallax, no packets, reveals render immediately. framer-motion runs under
  `LazyMotion` (domAnimation) + `MotionConfig reducedMotion="user"`; use `m.*`, never `motion.*`.
- The contribution graph uses a CSS keyframe sweep triggered once by IntersectionObserver
  (370 cells: no per-cell JS animation).

## Microinteractions stance
- Hover = one signal (colour shift or 1px nudge). No scale, no glow shadows on dark.
- Focus rings appear instantly (`:focus-visible`, 2px `--color-focus`).
- Silent success; no toasts.

## CTA voice
- No pill buttons on content pages. Actions are underlined text links (ink, `--color-rule-strong`
  underline that firms to ink on hover). The 404 page keeps one amber fill as the only button.

## taste-skill dials
DESIGN_VARIANCE 6 · MOTION_INTENSITY 5 · VISUAL_DENSITY 4. Applied rules: one CTA per intent, no
decorative text strips, no hairline on every row (use `divide-y`), no 3+ consecutive image/text
splits, long lists grouped into columns.

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
| 제약사, 비즈니스사(CSO) on first mention then 비즈니스사, 딜러사 / 제약사 정산, 딜러사 정산 | CSO for the customer company, 정산제약사, 상위 정산 |
| 서비스앱 (the iOS/Android product app) | 모바일 앱 for the product |
| 의약품 정산 SaaS | 정산 시스템, 정산 플랫폼 (mixed) |
| AI 어시스턴트 (product), 에이전트 (the agent process only) | AI 에이전트 for the product |
| 비즈니스사용, 제약사용, 관리자용, 서비스용 (MCP servers) | client, settler, admin, service, CSO용, 일반 회원용 |
| Four web apps: 비즈니스사(CSO) 웹, 제약사 웹, 관리자 웹, 서비스 웹 (딜러사, 일반 CSO) | - |
| 메인 백엔드 (the whole system); 정산 엔진 (the settlement part inside it); ~ 서버 (a specific server) | 정산 백엔드 |
| 앱 | 애플리케이션 |
| 리팩터링, 섀도 테이블, 사전 서명 URL, 읽기 전용 | 리팩토링, shadow 테이블, presigned, read-only |
| CTO (at 코쏘) / 소프트웨어 엔지니어 (overall) | other titles for 코쏘 |
| Periods: `2023.01 - 2024.06 (18개월)` | `·` separators, em dashes |
| Bullets end in a noun (구현, 해결); summaries end in -습니다 | mixed endings |

## Icons
- UI icons: **@phosphor-icons/react** only (regular weight, SSR entry `@phosphor-icons/react/dist/ssr`),
  inline with text, never as tiles above cards. (Lucide was dropped per taste-skill.)
- Brand marks: **simple-icons**, monochrome via currentColor (tech stacks, GitHub, App Store).
- Area icons on experience rows are small, accent-coloured, and sit inline with the title.

## Chrome
- Nav: **N9 edge-aligned minimal** — name left, three text links right; transparent over the sky,
  translucent paper (65%) with a light blur and a rule once scrolled.
- Footer: **Ft2 inline single line** — contact facts only.
- No re-drawn chrome (no fake file bars, browser bars, or terminals).

## What pages MUST share
Name wordmark ("이전희"), tokens, Pretendard, text-link CTA voice, stacked section heads.

## Diagrams
`CocsoDiagram`: inline SVG built from tokens. Shows the main backend's internals (app APIs,
정산 엔진, 공유 비즈니스 로직, 인증과 보안, 푸시, 파일 업로드), data stores, services, and the AI path.
Names only from the public copy: no hostnames, accounts, or customer names.
- Reveal once: container outline draws, boxes appear in order, connections draw on.
- Then light packets travel along connections (SVG `animateMotion`, no JS per frame).
- Flow tabs (정산, 처방통계 OCR, 전자계약, AI 어시스턴트) light one path, dim the rest, send packets
  in step order, and swap the caption; hovering a box explains it.
- Narrow screens: the figure scrolls inside its own container (min 680px); the page never does.

## What pages MAY differ on
Macrostructure within the family above. Only Home carries enrichment (the starfield).
