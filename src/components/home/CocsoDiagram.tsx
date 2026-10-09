"use client"

import { useState } from "react"
import { AnimatePresence, m, useReducedMotion } from "framer-motion"

// Detailed, animated map of the COCSO system. Only names already public on this page:
// no hostnames, accounts, or customer names.
//
// kind: "server"  = an independently deployed process (gets a live status light)
//       "package" = shared code compiled into every backend server
//       "client"  = a user-facing app
//       "store"   = data store

type Kind = "server" | "package" | "client" | "store"
type NodeDef = {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  kind: Kind
  accent?: boolean
}

const NODES: Record<string, NodeDef> = {
  // Clients: four web apps and the service app
  cso: {
    x: 20,
    y: 64,
    w: 176,
    h: 52,
    title: "비즈니스사(CSO) 웹",
    sub: "정산, 통계 입력",
    kind: "client",
  },
  pharma: {
    x: 20,
    y: 128,
    w: 176,
    h: 52,
    title: "제약사 웹",
    sub: "정산 확인",
    kind: "client",
  },
  admin: {
    x: 20,
    y: 192,
    w: 176,
    h: 52,
    title: "관리자 웹",
    sub: "운영, 정책",
    kind: "client",
  },
  serviceWeb: {
    x: 20,
    y: 256,
    w: 176,
    h: 52,
    title: "서비스 웹",
    sub: "딜러사, 일반 CSO",
    kind: "client",
  },
  mobile: {
    x: 20,
    y: 320,
    w: 176,
    h: 52,
    title: "서비스앱",
    sub: "iOS, Android",
    kind: "client",
  },
  chat: {
    x: 20,
    y: 630,
    w: 176,
    h: 52,
    title: "AI 채팅",
    sub: "웹 위젯",
    kind: "client",
  },

  // Main backend: separately deployed servers from one monorepo
  apiCso: {
    x: 262,
    y: 64,
    w: 196,
    h: 52,
    title: "비즈니스사 API 서버",
    sub: "대시보드, 정산",
    kind: "server",
  },
  apiPharma: {
    x: 262,
    y: 128,
    w: 196,
    h: 52,
    title: "제약사 API 서버",
    sub: "정산 조회",
    kind: "server",
  },
  apiAdmin: {
    x: 262,
    y: 192,
    w: 196,
    h: 52,
    title: "관리자 API 서버",
    sub: "운영 도구",
    kind: "server",
  },
  apiService: {
    x: 262,
    y: 256,
    w: 196,
    h: 52,
    title: "서비스 API 서버",
    sub: "딜러사, 일반 CSO",
    kind: "server",
  },
  apiMobile: {
    x: 262,
    y: 320,
    w: 196,
    h: 52,
    title: "모바일 API 서버",
    sub: "서비스앱 전용",
    kind: "server",
  },
  apiContract: {
    x: 476,
    y: 64,
    w: 196,
    h: 52,
    title: "계약 API 서버",
    sub: "계약 생성, 조회",
    kind: "server",
  },
  apiHook: {
    x: 476,
    y: 128,
    w: 196,
    h: 52,
    title: "웹훅 서버",
    sub: "결제, 외부 알림 수신",
    kind: "server",
  },
  apiMcpHook: {
    x: 476,
    y: 192,
    w: 196,
    h: 52,
    title: "MCP 웹훅 서버",
    sub: "MCP 연동",
    kind: "server",
  },

  // Shared packages compiled into every backend server
  engine: {
    x: 262,
    y: 426,
    w: 138,
    h: 48,
    title: "정산 엔진",
    sub: "순수 함수",
    kind: "package",
    accent: true,
  },
  shared: {
    x: 408,
    y: 426,
    w: 138,
    h: 48,
    title: "비즈니스 로직",
    sub: "MCP와 공유",
    kind: "package",
  },
  auth: {
    x: 554,
    y: 426,
    w: 118,
    h: 48,
    title: "인증과 보안",
    kind: "package",
  },

  // Data
  files: {
    x: 262,
    y: 540,
    w: 150,
    h: 50,
    title: "파일 저장소",
    sub: "사전 서명 URL",
    kind: "store",
  },
  db: {
    x: 430,
    y: 540,
    w: 242,
    h: 50,
    title: "MariaDB",
    sub: "엔티티 220여 개",
    kind: "store",
  },

  // Separate services outside the monorepo
  contract: {
    x: 760,
    y: 64,
    w: 300,
    h: 56,
    title: "전자계약 서버",
    sub: "RSA 서명, PDF, 알림톡과 메일",
    kind: "server",
  },
  ocr: {
    x: 760,
    y: 140,
    w: 300,
    h: 56,
    title: "OCR 서버",
    sub: "처방통계 사진, 사업자등록증 판독",
    kind: "server",
  },
  batch: {
    x: 760,
    y: 216,
    w: 300,
    h: 56,
    title: "배치 워커",
    sub: "일일 수수료 집계",
    kind: "server",
  },
  support: {
    x: 760,
    y: 292,
    w: 300,
    h: 56,
    title: "고객 지원 채팅 서버",
    sub: "SSE, 웹 앱 4곳",
    kind: "server",
  },

  // AI path
  gateway: {
    x: 262,
    y: 630,
    w: 150,
    h: 52,
    title: "게이트웨이",
    sub: "SSE 중계",
    kind: "server",
  },
  agent: {
    x: 430,
    y: 630,
    w: 150,
    h: 52,
    title: "에이전트",
    sub: "회사별 컨테이너",
    kind: "server",
  },
  mcp: {
    x: 598,
    y: 630,
    w: 180,
    h: 52,
    title: "MCP 서버 4종",
    sub: "읽기 전용 도구",
    kind: "server",
  },
  llm: {
    x: 430,
    y: 710,
    w: 150,
    h: 46,
    title: "LLM",
    sub: "Anthropic, OpenAI",
    kind: "client",
  },
}

const MONOREPO = { x: 244, y: 40, w: 446, h: 458 }
const PACKAGES = { x: 252, y: 400, w: 430, h: 86 }

// Paths are drawn in the direction data flows.
const EDGES: Record<string, string> = {
  cso: "M196 90 H262",
  pharma: "M196 154 H262",
  admin: "M196 218 H262",
  serviceWeb: "M196 282 H262",
  mobile: "M196 346 H262",
  usesPkgL: "M360 372 V400",
  usesPkgR: "M574 244 V400",
  toFiles: "M337 486 V540",
  toDb: "M551 486 V540",
  toContract: "M672 90 H760",
  toOcr: "M690 168 H760",
  batchDb: "M760 244 H730 V565 H672",
  support: "M760 320 H690",
  chat: "M196 656 H262",
  gwAgent: "M412 656 H430",
  agentMcp: "M580 656 H598",
  mcpDb: "M688 630 V610 H600 V590",
  agentLlm: "M505 682 V710",
}

type Flow = { label: string; edges: string[]; nodes: string[]; text: string }

const FLOWS: Record<string, Flow> = {
  settle: {
    label: "정산",
    edges: ["cso", "usesPkgL", "toDb", "batchDb"],
    nodes: ["cso", "apiCso", "engine", "db", "batch"],
    text: "비즈니스사가 상위 정산 엑셀을 올리면 비즈니스사 API 서버가 공유 패키지의 정산 엔진으로 계산과 검산을 하고, 확정과 같은 트랜잭션 안에서 딜러사 정산을 만듭니다. 별도 서버인 배치 워커는 매일 수수료를 다시 집계합니다.",
  },
  ocr: {
    label: "처방통계 OCR",
    edges: ["mobile", "toFiles", "toOcr", "toDb"],
    nodes: ["mobile", "apiMobile", "files", "ocr", "db"],
    text: "서비스앱에서 처방통계 사진을 올리면 사전 서명 URL로 파일 저장소에 바로 올라가고, 별도 서버인 OCR 서버가 판독한 약품과 수량을 정산 코드 기준으로 저장합니다.",
  },
  contract: {
    label: "전자계약",
    edges: ["toContract", "usesPkgR", "toDb"],
    nodes: ["apiContract", "contract", "db"],
    text: "계약 API 서버가 계약을 만들면 별도 서버인 전자계약 서버가 RSA로 서명하고 PDF를 발행합니다. 서명 상태 전이는 직렬화하고, 알림톡과 메일은 DB 커밋이 끝난 뒤에만 보냅니다.",
  },
  ai: {
    label: "AI 어시스턴트",
    edges: ["chat", "gwAgent", "agentLlm", "agentMcp", "mcpDb"],
    nodes: ["chat", "gateway", "agent", "llm", "mcp", "shared", "db"],
    text: "웹 채팅 질문은 게이트웨이를 거쳐 회사별 에이전트로 갑니다. 에이전트는 LLM과 대화하며 MCP 도구로 해당 회사의 데이터만 읽고, MCP 서버는 메인 백엔드와 같은 비즈니스 로직 패키지를 씁니다.",
  },
}

const DESCRIPTIONS: Record<string, string> = {
  apiCso: "메인 백엔드 모노레포의 앱 중 하나로, 따로 빌드하고 배포합니다.",
  apiMobile:
    "서비스앱(iOS, Android) 전용 서버입니다. 메인 백엔드의 다른 서버와 같은 패키지를 쓰지만 따로 배포합니다.",
  apiHook: "스토어 결제 알림 같은 외부 웹훅을 받는 서버입니다.",
  serviceWeb:
    "딜러사와 일반 CSO가 쓰는 웹. 서비스앱과 같은 기능을 웹에서 제공합니다.",
  support:
    "웹 앱 4곳에 위젯으로 붙는 1:1 문의 채팅. 쿠키 인증을 그대로 쓰려고 SSE를 골랐습니다.",
  engine:
    "구간 요율, 최소 정산 금액, 이관, 인센티브 같은 다단계 수수료 계산을 순수 함수 패키지로 분리했습니다.",
  shared:
    "비즈니스 로직을 공유 패키지로 떼어내 여러 서버와 MCP 서버가 같은 코드를 씁니다.",
  auth: "리프레시 토큰 재사용 탐지, 로그 개인정보 마스킹, SSRF 방어, 업로드 멱등 키.",
  contract:
    "계약 라이브러리(@cocso/contract)와 계약 서버를 단독으로 만들었습니다.",
  ocr: "약품 마스터 캐시로 조회를 46배 빠르게 하고, 사진당 약 1초를 줄였습니다.",
  batch: "윈도우 함수로 다시 쓰고, 섀도 테이블 교체와 증분 배치를 넣었습니다.",
  gateway: "웹 채팅과 에이전트 사이에서 대화 이벤트와 파일을 SSE로 중계합니다.",
  agent:
    "오픈소스 Hermes Agent를 포크해 4계층으로 재설계하고 회사마다 컨테이너로 띄웁니다.",
  mcp: "비즈니스사용, 제약사용, 관리자용, 서비스용 4종. 비즈니스사용만 도구가 70개 이상입니다.",
  mobile:
    "SwiftUI와 Jetpack Compose로 동시에 만들고 두 앱의 동작이 같은지 자동으로 검사합니다.",
  db: "정산, 계약, 거래처 데이터. 확정 시 행 잠금으로 동시성을 막습니다.",
}

const DEFAULT_CAPTION =
  "코쏘 시스템 구성. 메인 백엔드는 하나의 모노레포에서 서버 8개를 따로 배포하고, 모두 정산 엔진을 포함한 공유 패키지를 씁니다. 전자계약, OCR, 배치, 고객 지원, AI는 별도 서버입니다. 흐름을 고르거나 상자에 마우스를 올려 보세요."

const EASE = [0.16, 1, 0.3, 1] as const
const view = { once: true, margin: "-15% 0px" } as const

const CocsoDiagram = () => {
  const reduce = useReducedMotion()
  const [flow, setFlow] = useState<string | null>(null)
  const [hover, setHover] = useState<string | null>(null)

  const active = flow ? FLOWS[flow] : null
  const edgeOn = (id: string) => !active || active.edges.includes(id)
  const nodeOn = (id: string) => !active || active.nodes.includes(id)
  const caption =
    (hover && DESCRIPTIONS[hover]) || active?.text || DEFAULT_CAPTION
  const tabs: [string | null, string][] = [
    [null, "전체 구조"],
    ...Object.entries(FLOWS).map(([k, f]) => [k, f.label] as [string, string]),
  ]

  const frame = (
    r: { x: number; y: number; w: number; h: number },
    label: string,
    delay: number,
    dashed = true,
  ) => (
    <>
      <m.rect
        x={r.x}
        y={r.y}
        width={r.w}
        height={r.h}
        rx={16}
        fill="color-mix(in oklch, var(--color-paper-2) 40%, transparent)"
        stroke="var(--color-rule-strong)"
        strokeWidth={1}
        strokeDasharray={dashed ? "6 5" : undefined}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: active ? 0.6 : 1 }}
        animate={{ opacity: active ? 0.6 : 1 }}
        viewport={view}
        transition={{ duration: 0.9, delay, ease: EASE }}
      />
      <text x={r.x + 14} y={r.y + 20} fontSize="12" fill="var(--color-muted)">
        {label}
      </text>
    </>
  )

  return (
    <figure className="flex flex-col gap-[var(--space-sm)] xl:-mx-[110px]">
      <div
        role="tablist"
        aria-label="데이터 흐름"
        className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
      >
        {tabs.map(([key, label]) => {
          const selected = key === flow
          return (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFlow(key)}
              className={`whitespace-nowrap underline-offset-[6px] transition-colors duration-[var(--dur-short)] active:translate-y-px ${
                selected
                  ? "text-[var(--color-ink)] underline decoration-[var(--color-accent)] decoration-2"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      <div className="scrollbar-hide -mx-5 overflow-x-auto px-5">
        <svg
          viewBox="0 0 1080 770"
          className="w-full min-w-[760px] select-none"
          role="img"
          aria-label="코쏘 시스템 구성도. 비즈니스사(CSO), 제약사, 관리자, 서비스 웹 4개와 딜러사와 일반 CSO가 쓰는 서비스앱이 각자의 API 서버를 씁니다. 메인 백엔드는 하나의 NestJS 모노레포에서 비즈니스사, 제약사, 관리자, 서비스, 모바일, 계약, 웹훅, MCP 웹훅 API 서버를 따로 배포하고, 모두 정산 엔진과 비즈니스 로직, 인증 패키지를 공유하며 MariaDB와 파일 저장소를 씁니다. 전자계약 서버, OCR 서버, 배치 워커, 고객 지원 채팅 서버는 별도 서버입니다. AI 채팅은 게이트웨이와 회사별 에이전트, MCP 서버를 거쳐 데이터를 읽고, 에이전트는 LLM과 대화합니다."
        >
          <defs>
            <marker
              id="cocso-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0 0 8 4 0 8z" fill="var(--color-faint)" />
            </marker>
            <radialGradient id="cocso-packet">
              <stop
                offset="0%"
                stopColor="var(--color-accent)"
                stopOpacity="1"
              />
              <stop
                offset="100%"
                stopColor="var(--color-accent)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          <text x={20} y={30} fontSize="12" fill="var(--color-muted)">
            사용자
          </text>
          <text x={760} y={30} fontSize="12" fill="var(--color-muted)">
            별도 서버
          </text>
          <text x={262} y={618} fontSize="12" fill="var(--color-muted)">
            AI 어시스턴트
          </text>

          {/* Boundaries: one monorepo, many servers; one shared package layer */}
          {frame(
            MONOREPO,
            "메인 백엔드 (NestJS 모노레포, 서버별 독립 배포)",
            0,
          )}
          {frame(PACKAGES, "공유 패키지 20개 (모든 서버에 포함)", 0.2)}

          {/* Connections */}
          {Object.entries(EDGES).map(([id, d], i) => {
            const lit = active?.edges.includes(id) ?? false
            const dotted = id.startsWith("usesPkg")
            return (
              <m.path
                key={id}
                id={`cocso-edge-${id}`}
                d={d}
                fill="none"
                stroke={lit ? "var(--color-accent)" : "var(--color-faint)"}
                strokeWidth={lit ? 1.7 : 1.1}
                strokeDasharray={dotted ? "2 4" : undefined}
                markerEnd={dotted ? undefined : "url(#cocso-arrow)"}
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: edgeOn(id) ? 1 : 0.15 }}
                animate={{ opacity: edgeOn(id) ? 1 : 0.15 }}
                viewport={view}
                transition={{
                  duration: 0.6,
                  delay: reduce ? 0 : 1 + i * 0.05,
                  ease: EASE,
                }}
              />
            )
          })}

          {/* Packets travel along the paths; in step order when a flow is picked */}
          {!reduce &&
            Object.keys(EDGES)
              .filter(
                (id) =>
                  !id.startsWith("usesPkg") &&
                  (active ? active.edges.includes(id) : true),
              )
              .map((id, i) => {
                const order = active ? active.edges.indexOf(id) : i
                const dur = active ? 1.4 : 3.4
                return (
                  <g key={`${flow ?? "all"}-${id}`}>
                    {[0, 1].map((k) => (
                      <circle
                        key={k}
                        r={active ? 5.5 : 3.5}
                        fill="url(#cocso-packet)"
                        opacity={active ? 1 : 0.7}
                      >
                        <animateMotion
                          dur={`${dur}s`}
                          begin={`${(active ? order * 0.45 : (i % 6) * 0.55) + k * (dur / 2) + (active ? 0.2 : 2)}s`}
                          repeatCount="indefinite"
                        >
                          <mpath href={`#cocso-edge-${id}`} />
                        </animateMotion>
                      </circle>
                    ))}
                  </g>
                )
              })}

          {/* Boxes */}
          {Object.entries(NODES).map(([id, n], i) => {
            const on = nodeOn(id)
            const accent = active ? active.nodes.includes(id) : !!n.accent
            const isPackage = n.kind === "package"
            const isServer = n.kind === "server"
            return (
              <m.g
                key={id}
                onMouseEnter={() => setHover(id)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: DESCRIPTIONS[id] ? "help" : "default" }}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: on ? 1 : 0.25, y: 0 }}
                animate={{ opacity: on ? 1 : 0.25 }}
                viewport={view}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : 0.3 + i * 0.03,
                  ease: EASE,
                }}
              >
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={n.h}
                  rx={isPackage ? 7 : 10}
                  fill={
                    accent
                      ? "var(--color-accent-soft)"
                      : isPackage
                        ? "var(--color-paper-3)"
                        : "var(--color-paper-2)"
                  }
                  stroke={
                    accent
                      ? "var(--color-accent)"
                      : hover === id
                        ? "var(--color-ink-2)"
                        : "var(--color-rule-strong)"
                  }
                  strokeWidth={1}
                  style={{ transition: "stroke 180ms, fill 180ms" }}
                />
                {/* Live status light: this box is its own running server */}
                {isServer && (
                  <circle
                    cx={n.x + n.w - 13}
                    cy={n.y + 13}
                    r={3}
                    fill="var(--color-live)"
                  >
                    {!reduce && (
                      <animate
                        attributeName="opacity"
                        values="1;0.35;1"
                        dur="2.4s"
                        begin={`${(i % 7) * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                )}
                <text
                  x={n.x + 12}
                  y={n.sub ? n.y + n.h / 2 - 3 : n.y + n.h / 2 + 4.5}
                  fontSize={isPackage ? 12.5 : 14}
                  fontWeight={600}
                  fill="var(--color-ink)"
                >
                  {n.title}
                </text>
                {n.sub && (
                  <text
                    x={n.x + 12}
                    y={n.y + n.h / 2 + 14}
                    fontSize="11.5"
                    fill="var(--color-muted)"
                  >
                    {n.sub}
                  </text>
                )}
              </m.g>
            )
          })}

          {/* Legend */}
          <g transform="translate(760 384)">
            <circle cx={6} cy={10} r={3} fill="var(--color-live)" />
            <text x={18} y={14} fontSize="11.5" fill="var(--color-muted)">
              독립적으로 배포되는 서버
            </text>
            <rect
              x={0}
              y={26}
              width={12}
              height={12}
              rx={3}
              fill="var(--color-paper-3)"
              stroke="var(--color-rule-strong)"
            />
            <text x={18} y={36} fontSize="11.5" fill="var(--color-muted)">
              모든 서버가 공유하는 패키지
            </text>
            <line
              x1={0}
              y1={54}
              x2={12}
              y2={54}
              stroke="var(--color-faint)"
              strokeDasharray="2 4"
            />
            <text x={18} y={58} fontSize="11.5" fill="var(--color-muted)">
              패키지 사용
            </text>
          </g>
        </svg>
      </div>

      <div className="min-h-[3.5rem]" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <m.p
            key={caption}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="max-w-[72ch] text-sm leading-6 text-[var(--color-ink-2)] text-pretty"
          >
            {caption}
          </m.p>
        </AnimatePresence>
      </div>
    </figure>
  )
}

export default CocsoDiagram
