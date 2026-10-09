"use client"

import { motion, useReducedMotion } from "framer-motion"

// High-level map of the COCSO system. Only names already public on this page; no hosts or vendors.

type Box = {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  accent?: boolean
}

const BOXES: Record<string, Box> = {
  web: {
    x: 16,
    y: 40,
    w: 160,
    h: 56,
    title: "웹 앱",
    sub: "CSO, 제약사, 관리자",
  },
  mobile: {
    x: 16,
    y: 116,
    w: 160,
    h: 56,
    title: "모바일 앱",
    sub: "iOS, Android",
  },
  chat: {
    x: 16,
    y: 264,
    w: 160,
    h: 56,
    title: "웹 채팅",
    sub: "AI 어시스턴트",
  },
  backend: {
    x: 250,
    y: 40,
    w: 220,
    h: 132,
    title: "메인 백엔드",
    sub: "NestJS 모노레포, 정산 엔진 포함",
    accent: true,
  },
  db: { x: 300, y: 196, w: 120, h: 44, title: "MariaDB" },
  gateway: { x: 250, y: 264, w: 100, h: 56, title: "게이트웨이", sub: "SSE" },
  agent: {
    x: 370,
    y: 264,
    w: 100,
    h: 56,
    title: "에이전트",
    sub: "회사별 컨테이너",
  },
  contract: {
    x: 548,
    y: 40,
    w: 196,
    h: 52,
    title: "전자계약 서버",
    sub: "RSA 서명, PDF",
  },
  ocr: {
    x: 548,
    y: 108,
    w: 196,
    h: 52,
    title: "OCR 서버",
    sub: "처방통계 사진 판독",
  },
  batch: {
    x: 548,
    y: 176,
    w: 196,
    h: 52,
    title: "배치 워커",
    sub: "일일 수수료 집계",
  },
  mcp: {
    x: 548,
    y: 264,
    w: 196,
    h: 56,
    title: "MCP 서버 4종",
    sub: "읽기 전용 도구",
  },
}

// [x1, y1, x2, y2, dashed?]
const EDGES: [number, number, number, number, boolean?][] = [
  [176, 68, 250, 78],
  [176, 144, 250, 134],
  [360, 172, 360, 196],
  [470, 66, 548, 66],
  [470, 134, 548, 134],
  [548, 202, 420, 218],
  [176, 292, 250, 292],
  [350, 292, 370, 292],
  [470, 292, 548, 292],
  [600, 264, 420, 230, true],
]

const ORDER = [
  "web",
  "mobile",
  "chat",
  "backend",
  "db",
  "gateway",
  "agent",
  "contract",
  "ocr",
  "batch",
  "mcp",
]
const EASE = [0.16, 1, 0.3, 1] as const

const CocsoDiagram = () => {
  const reduce = useReducedMotion()
  const view = { once: true, margin: "-15% 0px" } as const

  return (
    <figure className="flex flex-col gap-2">
      <div className="scrollbar-hide -mx-5 overflow-x-auto px-5">
        <svg
          viewBox="0 0 760 336"
          className="w-full min-w-[640px]"
          role="img"
          aria-label="코쏘 시스템 구성도: 웹 앱과 모바일 앱이 정산 엔진을 포함한 메인 백엔드를 쓰고, 백엔드는 MariaDB와 전자계약 서버, OCR 서버에 연결됩니다. 배치 워커는 DB를 집계하고, 웹 채팅은 게이트웨이와 에이전트를 거쳐 MCP 서버로 데이터를 읽습니다."
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 8 4 0 8z" fill="var(--color-faint)" />
            </marker>
          </defs>

          <text x="16" y="22" fontSize="12" fill="var(--color-muted)">
            사용자
          </text>
          <text x="250" y="22" fontSize="12" fill="var(--color-muted)">
            백엔드
          </text>
          <text x="548" y="22" fontSize="12" fill="var(--color-muted)">
            서비스
          </text>

          {EDGES.map(([x1, y1, x2, y2, dashed], i) => (
            <motion.line
              key={i}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={view}
              transition={{ duration: 0.7, delay: 0.55 + i * 0.07, ease: EASE }}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--color-faint)"
              strokeWidth="1.25"
              strokeDasharray={dashed ? "4 4" : undefined}
              markerEnd="url(#arrow)"
            />
          ))}
          <motion.text
            x="472"
            y="262"
            fontSize="11"
            fill="var(--color-faint)"
            textAnchor="middle"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={view}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            공유 로직 재사용
          </motion.text>

          {ORDER.map((key, i) => {
            const b = BOXES[key]
            return (
              <motion.g
                key={key}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
              >
                <rect
                  x={b.x}
                  y={b.y}
                  width={b.w}
                  height={b.h}
                  rx="8"
                  fill={
                    b.accent
                      ? "var(--color-accent-soft)"
                      : "var(--color-paper-2)"
                  }
                  stroke={
                    b.accent
                      ? "var(--color-accent)"
                      : "var(--color-rule-strong)"
                  }
                  strokeWidth="1"
                />
                <text
                  x={b.x + 14}
                  y={b.sub ? b.y + b.h / 2 - 3 : b.y + b.h / 2 + 5}
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--color-ink)"
                >
                  {b.title}
                </text>
                {b.sub && (
                  <text
                    x={b.x + 14}
                    y={b.y + b.h / 2 + 15}
                    fontSize="11.5"
                    fill="var(--color-muted)"
                  >
                    {b.sub}
                  </text>
                )}
              </motion.g>
            )
          })}
        </svg>
      </div>
      <figcaption className="text-sm text-[var(--color-muted)]">
        코쏘 시스템 구성. 정산 엔진을 품은 메인 백엔드를 중심으로 각 서비스가
        연결됩니다.
      </figcaption>
    </figure>
  )
}

export default CocsoDiagram
