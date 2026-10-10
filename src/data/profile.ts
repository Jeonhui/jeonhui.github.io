export type LinkItem = { label: string; href: string }

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  summary: string
  stack: string[]
  links?: LinkItem[]
  groups: {
    title: string
    description?: string
    /** One plain sentence shown on the home page instead of the bullet list. */
    summary: string
    icon?: "server" | "signature" | "bot" | "smartphone" | "palette" | "scan" | "map" | "blocks"
    points: string[]
  }[]
}

export type Project = {
  id: string
  name: string
  subtitle?: string
  kind: "app" | "opensource"
  period: string
  summary: string
  role: string
  team?: string
  stack: string[]
  highlights: string[]
  points: string[]
  image?: string
  links?: LinkItem[]
}

export type TimelineItem = {
  title: string
  period: string
  description?: string
  tag?: string
}

export const PROFILE = {
  name: "이전희",
  nameEn: "Jeonhui Lee",
  role: "소프트웨어 엔지니어",
  lead: "의약품 정산 SaaS를 만드는 소프트웨어 엔지니어입니다. 백엔드와 전자계약, AI 어시스턴트, 모바일 앱을 직접 만듭니다.",
  intro: [
    "2025년 5월부터 코쏘(COCSO)에서 제약사와 비즈니스사(CSO), 딜러사 사이의 수수료를 정산하는 서비스를 만들고 있습니다. 백엔드는 첫 커밋부터 맡았고, 전자계약과 MCP 기반 AI 어시스턴트, iOS와 Android 앱도 직접 구현했습니다.",
    "그 전에는 iOS 개발자였습니다. 마인크래프트 리소스 앱 SFOM을 개발하고 운영했고, 월간 사용자는 6.3만 명 규모였습니다.",
  ],
  email: "l06094@gmail.com",
  github: "https://github.com/Jeonhui",
}

export const EXPERIENCES: Experience[] = [
  {
    id: "cocso",
    company: "코쏘 (COCSO)",
    role: "CTO",
    period: "2025.05 - 현재",
    summary:
      "의약품 영업 위탁(CSO) 구조에서 오가는 수수료를 정산하는 B2B SaaS입니다. 정산 엔진을 포함한 메인 백엔드는 거의 혼자 설계하고 구현했고(백엔드 커밋의 약 98%), 전자계약, AI 어시스턴트, 서비스앱, 웹과 디자인 시스템까지 맡고 있습니다. 1년 반 동안 12개 저장소에 2,900건 넘게 커밋했습니다.",
    stack: [
      "NestJS",
      "TypeScript",
      "TypeORM",
      "MariaDB",
      "Next.js",
      "React",
      "SwiftUI",
      "Jetpack Compose",
      "MCP",
      "Python",
      "FastAPI",
      "Turborepo",
      "AWS S3",
      "GitHub Actions",
    ],
    groups: [
      {
        title: "메인 백엔드와 정산 엔진",
        description: "NestJS 모노레포, 앱 8개, 공유 패키지 20개, 엔티티 220여 개",
        summary:
          "서비스 전체를 받치는 메인 백엔드를 첫 커밋부터 거의 혼자 만들었습니다. 그 안의 정산 엔진은 다단계 수수료 계산을 순수 함수 패키지로 떼어내고, 실제 DB에 붙는 테스트로 금액이 어긋나지 않게 지킵니다.",
        icon: "server",
        points: [
          "첫 커밋부터 GitHub Actions 배포 파이프라인(SSH 배포, PM2)까지 백엔드 전체를 직접 구축",
          "메인 백엔드 안의 정산 엔진: 구간 요율, 최소 정산 금액, 이관, 매출 차감, 인센티브 등 다단계 수수료 계산을 순수 함수 패키지로 분리하고 제약사 정산과 딜러사 정산을 전면 재작성",
          "단위 테스트와 실제 DB를 쓰는 통합 테스트(스펙 100여 개)로 금액 회귀를 막고, 반올림 오차, 부분 재계산 시 집계 유실, 확정 시 동시성(행 잠금) 문제를 해결",
          "엑셀 업로드, 자동 계산, 검산, 그룹 확정으로 이어지는 흐름을 설계하고, 확정과 같은 트랜잭션 안에서 딜러사 정산을 생성",
          "비즈니스 로직을 공유 패키지로 추출해 여러 앱과 MCP 서버가 같은 코드를 재사용하도록 구조화",
          "본인인증, FCM 푸시(아웃박스 큐, 예약 발송), 인앱 결제 서버 알림, S3 사전 서명 URL 업로드, OCR 연동",
          "토큰 오용 차단, 리프레시 토큰 재사용 탐지, 로그 개인정보 마스킹, SSRF 방어, 업로드 멱등 키 등 보안 강화",
        ],
      },
      {
        title: "전자계약",
        description: "계약 라이브러리(@cocso/contract)와 계약 서버, 단독 개발",
        summary:
          "계약서를 만들고 RSA로 서명해 PDF로 발행하는 라이브러리, 그리고 서명 상태를 관리하고 알림을 보내는 계약 서버를 혼자 만들었습니다.",
        icon: "signature",
        points: [
          "판촉영업 위탁 계약서와 부속합의서를 생성하는 TypeScript 라이브러리를 만들고, RSA 서명과 SHA-256 해시로 무결성 검증 및 버전 이력 관리",
          "Puppeteer로 PDF를 생성하고, Changesets로 사내 패키지 배포(v2.5까지 운영)",
          "서명 상태 전이(작성, 발신자 서명, 수신자 서명, 완료 또는 만료)를 직렬화하고, 알림은 DB 커밋 이후에만 발송",
          "알림톡과 메일 통합 알림, 자동 발송 주기, 재위탁 통보 생성, 부분 실패 시 미발송분만 재시도",
          "PDF 생성 중 종료되지 않은 Chromium 프로세스가 쌓이던 문제 해결",
        ],
      },
      {
        title: "AI 어시스턴트",
        description: "MCP(Model Context Protocol) 서버 4종, AI 게이트웨이, 회사별 에이전트",
        summary:
          "회사별로 데이터가 격리된 MCP 서버 4종(비즈니스사용 도구만 70개 이상)과, 웹 채팅과 에이전트를 잇는 게이트웨이, 회사마다 따로 뜨는 에이전트를 운영합니다.",
        icon: "bot",
        points: [
          "비즈니스사용, 제약사용, 관리자용, 서비스용 MCP 서버 4종 구축. 비즈니스사용은 읽기 전용 도구 70개 이상을 제공하고 결과는 해당 회사 데이터로만 제한",
          "OAuth와 API 키 인증, 무상태(stateless) 모드 전환, 회사별 에이전트 라우팅 설계",
          "웹 채팅과 에이전트를 잇는 SSE 게이트웨이(대화 이벤트, 파일 전송, 이전 메시지 불러오기)",
          "서비스 이용자(딜러사, 일반 CSO)용 AI 채팅: Anthropic과 OpenAI SDK, 외부 MCP 연결, 일·주·월 토큰 사용 한도, 응답 완료 푸시",
          "오픈소스 Hermes Agent를 포크해 경량화한 Python 에이전트를 4계층(코어, 도메인 MCP, 회사 설정, 런타임)으로 재설계하고 회사별 Docker 컨테이너로 운영",
          "도구 계약 스냅샷 테스트와, 서버를 띄우지 않고 의존성 주입 구성을 검사하는 테스트로 백엔드와 MCP 서버의 동기화 안정성 확보",
        ],
      },
      {
        title: "서비스앱",
        description: "딜러사와 일반 CSO가 쓰는 앱. iOS(SwiftUI)와 Android(Jetpack Compose) 모노레포, 커밋 약 84%",
        summary:
          "SwiftUI와 Jetpack Compose로 두 플랫폼을 동시에 만들고, 기능 명세로 두 앱이 같은 동작을 하는지 자동으로 검사합니다.",
        icon: "smartphone",
        points: [
          "두 플랫폼을 MVVM으로 동시에 개발하고, 기능 명세 26개와 동등성 매니페스트 24개로 두 앱의 동작이 같은지 자동 검증",
          "카카오와 네이버 로그인, 처방통계 사진 업로드와 OCR, 예상 수수료, 의약품 검색, AI 어시스턴트 채팅, 인앱 구매, 강제 업데이트",
          "다크 테마와 Dynamic Type 지원, 스테이징과 운영 빌드 분리, App Store 심사 대응",
        ],
      },
      {
        title: "디자인 시스템과 웹",
        description: "사내 디자인 시스템(cocso-ui)의 모바일 확장, Next.js 모노레포",
        summary:
          "디자인 토큰을 SwiftUI와 Compose 컴포넌트로 내보내는 코드 생성기를 만들었고, 비즈니스사 대시보드 웹 앱의 주 작성자입니다.",
        icon: "palette",
        points: [
          "디자인 토큰 코드 생성기와 SwiftUI, Compose 컴포넌트 패키지를 단독으로 구축하고 iOS 26 Liquid Glass와 Android 블러 효과 대응",
          "스크린샷 비교로 시각 회귀를 잡는 테스트를 CI에 넣고, 모든 컴포넌트에 axe 접근성 테스트 적용",
          "비즈니스사 대시보드와 제약사용 웹 앱의 주 작성자로 정산 화면, 셀 단위 키보드 이동이 되는 OCR 통계 입력 표, 위탁 관계 그래프 구현",
          "디자인 시스템을 관리자, 정산, 계약 앱 전체에 적용하고, 관리자 공용 UI를 별도 패키지로 분리",
        ],
      },
      {
        title: "OCR, 배치, 고객 지원",
        summary:
          "처방통계 사진 판독 서버를 처음 만들고 약품 조회를 46배 빠르게 했습니다. 일일 수수료 배치와 고객 지원 채팅 서버도 맡았습니다.",
        icon: "scan",
        points: [
          "처방통계 사진 판독 API 서버를 처음 구축. 약품 마스터(약 8만 행)를 디스크에 캐시해 조회를 46배 단축하고, OCR 연결 재사용으로 사진당 약 1초 절감, 사업자등록증 판독 기능 개발",
          "일일 수수료 집계 배치를 윈도우 함수로 다시 써서 잘못 계산되던 결과를 수정하고, 섀도 테이블 교체 방식과 증분 배치, 동시 실행 방지 도입",
          "웹 앱 4곳에 위젯으로 붙는 고객 지원 채팅 서버를 단독 구축. 쿠키 인증을 그대로 쓰기 위해 SSE를 선택하고, 재연결 시 빠진 메시지 보충과 하트비트로 메시지 유실 방지",
        ],
      },
    ],
  },
  {
    id: "ride",
    company: "라이드",
    role: "소프트웨어 엔지니어 인턴 (Product & Tech Development)",
    period: "2024.07 - 2024.08",
    summary:
      "React Native와 TypeScript를 익히며 맛집 추천 앱 \u201c라슐랭\u201d을 만들고, 사내 React Native 디자인 시스템을 구축했습니다.",
    stack: ["React Native", "TypeScript", "axios", "react-native-naver-map"],
    groups: [
      {
        title: "라슐랭",
        description: "내방역 근처 맛집 추천 앱 (iOS, Android)",
        summary: "지도에 자기 맛집을 등록하고 모아 보는 React Native 앱을 만들었습니다.",
        icon: "map",
        points: ["react-native-naver-map으로 사용자가 맛집을 지도에 등록하고 확인하는 기능 구현"],
      },
      {
        title: "React Native 디자인 시스템",
        summary: "흩어져 있던 공통 컴포넌트를 모아 사내 디자인 시스템으로 정리했습니다.",
        icon: "blocks",
        points: ["사내 공통 컴포넌트를 정리해 React Native 디자인 시스템 구축"],
      },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: "sfom",
    name: "SFOM",
    subtitle: "스폼 (Store FOr Minecraft)",
    kind: "app",
    period: "2023.01 - 2024.06 (18개월)",
    summary: "마인크래프트에서 쓰는 맵, 스킨, 시드 같은 리소스를 내려받을 수 있는 앱입니다.",
    role: "iOS 앱 개발, 운영",
    team: "iOS 1명, Android(PM 겸임) 1명, 디자인 1명",
    stack: ["SwiftUI", "Combine", "CoreData", "Alamofire", "Kingfisher", "Firebase"],
    highlights: ["MAU 6.3만", "DAU 3천", "메모리 50-90% 절감"],
    points: [
      "iOS 기준 DAU 3천 명, MAU 6.3만 명 달성",
      "메인 화면 진입 시 메모리 사용량이 급증하는 문제를 찾아, Kingfisher ImageProcessor를 상속한 리사이징 프로세서로 메모리 사용량 50-90% 절감",
      "Firebase(Auth, Query, CollectionReference, DatabaseReference)를 확장해 Combine Publisher를 돌려주는 CRUD 계층 구현",
      "UIViewControllerRepresentable로 Google Ads 배너, 전면 광고를 SwiftUI에 넣어 수익화",
      "iOS 15 SwiftUI 시트의 높이 조절 한계를 풀기 위해 FittedSheets-SwiftUI를 직접 만들어 배포",
      "데이터 호출 로직, 네이밍, 구조를 Notion에 문서화해 Android 파트와 맞추고 협업 속도 향상",
      "리소스 설치가 어렵다는 피드백을 받아 설치 가이드 제공",
    ],
    image: "/images/projects/sfom.webp",
  },
  {
    id: "briefing",
    name: "Briefing",
    subtitle: "브리핑 (AI 뉴스 요약)",
    kind: "app",
    period: "2023.09 - 2024.04 (8개월)",
    summary: "GPT로 전날 뉴스 기사를 분석해 주요 키워드와 내용을 요약해 주는 앱입니다.",
    role: "iOS 팀 리드, 개발",
    team: "iOS 2명, Android 2명, 백엔드 2명, PM 1명",
    stack: ["UIKit", "RxSwift", "Alamofire", "SnapKit", "WidgetKit", "FirebaseAnalytics"],
    highlights: ["App Store 뉴스 부문 22위", "활성 참여 20% 증가", "iOS 팀 리드"],
    points: [
      "App Store 뉴스 부문 22위",
      "클로저 기반 코드를 RxSwift로 전환해 가독성과 유지보수성 개선",
      "RxSwift가 처음인 팀원과 함께 공부하며 도입해 팀의 반응형 프로그래밍 이해도 향상",
      "새 UI 도입에 맞춰 클린 아키텍처 기반 리팩터링을 주도해 이후 기능 추가 속도 향상",
      "사용자 피드백을 반영해 WidgetKit 위젯 개발",
      "UNUserNotification 알림으로 재방문을 유도해 활성 사용자 참여 20% 증가",
      "Localizable 기반 다국어 지원",
    ],
    image: "/images/projects/briefing.webp",
  },
  {
    id: "triggermath",
    name: "트리거 수학",
    subtitle: "외주 프로젝트",
    kind: "app",
    period: "2023.12 - 2024.03 (4개월)",
    summary: "학원의 문제 제출 과정을 앱으로 옮겨, 학생들이 수학 문제를 더 잘 풀도록 돕는 앱입니다.",
    role: "iOS 개발, DB 설계, 서버 개발",
    team: "iOS 1명, Android 1명, 프론트엔드 1명",
    stack: ["UIKit", "RxSwift", "Alamofire", "SnapKit", "Kingfisher"],
    highlights: ["iOS와 서버 단독 개발"],
    points: [
      "JWT 토큰을 Keychain(SecItem)에 저장하고 PropertyWrapper로 감싸 안전하고 간편하게 관리",
      "UIImage를 확장해 이미지 비율을 계산하고, 문제 이미지 크기에 맞게 UIImageView 크기 조정",
      "진행 막대, 문제 접기와 펼치기 등에 애니메이션을 더해 사용성 개선",
    ],
    image: "/images/projects/triggermath.webp",
  },
  {
    id: "fittedsheets-swiftui",
    name: "FittedSheets-SwiftUI",
    kind: "opensource",
    period: "2023.07 - 2024.08",
    summary: "UIKit용 FittedSheets를 확장해 iOS 13 이상의 SwiftUI에서 쓸 수 있게 만든 바텀 시트 라이브러리입니다.",
    role: "라이브러리 개발",
    stack: ["SwiftUI", "UIKit", "FittedSheets"],
    highlights: [],
    points: [
      "SwiftUI View 확장으로 기본 .sheet와 같은 방식으로 쓸 수 있게 설계",
      "FittedSheets의 기능 전체 지원",
      "이슈로 제보된 인라인 모드 오작동 해결 (#2)",
      "콘텐츠 크기가 바뀌어도 시트가 자동으로 맞춰지지 않던 문제 해결 (#3)",
      "동작을 바로 확인할 수 있는 예제 앱 제공",
    ],
    image: "/images/projects/fittedSheetsSwiftUI.webp",
    links: [{ label: "GitHub", href: "https://github.com/Jeonhui/FittedSheets-SwiftUI" }],
  },
  {
    id: "coredatastorage",
    name: "CoreDataStorage",
    kind: "opensource",
    period: "2023.02 - 2023.03",
    summary: "CoreData와 Combine을 결합해 NSManagedObject를 쉽게 다루게 해 주는 라이브러리입니다.",
    role: "라이브러리 개발",
    stack: ["CoreData", "Combine"],
    highlights: [],
    points: [
      "NSManagedObject(DAO)와 구조체(VO)를 분리해 데이터를 안전하게 관리",
      "Combine 기반 CRUD API로 CoreData 비동기 작업 단순화",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Jeonhui/CoreDataStorage" }],
  },
]

export const ACTIVITIES: TimelineItem[] = [
  {
    title: "2024 벤처스타트업 SW개발인재 매칭 페스티벌",
    tag: "중소벤처기업부 장관상",
    period: "2024.10",
    description: "스타트업 아카데미와 교내 프로그램에 꾸준히 참여하며 쌓은 실무 역량을 인정받아 수상",
  },
  {
    title: "한국외국어대학교 「컴퓨팅 사고」 조교",
    period: "2024.09 - 2024.12",
    description: "교양 필수 과목의 실습 진행과 과제 피드백",
  },
  {
    title: "한국외국어대학교 「캡스톤 프로젝트 및 실습」 조교",
    period: "2024.01 - 2024.06",
    description: "전공 필수 과목의 팀 프로젝트 지원과 발표 진행",
  },
  {
    title: "UMC HUFS iOS 파트 리더, 운영진",
    period: "2023.08 - 2024.01",
    description: "35개 대학 연합 동아리에서 iOS 파트를 이끌고 행사 운영",
  },
  {
    title: "HAI Lab 의료 인공지능 연구실 학부연구생",
    period: "2023.06 - 2024.02",
    description: "SW중심대학 산학협력 의료 AI 모델 개발 프로젝트 Mella 참여",
  },
]

export const EDUCATION: TimelineItem[] = [
  {
    title: "한국외국어대학교 글로벌캠퍼스",
    period: "2019.03 - 2025.08",
    description: "컴퓨터·전자시스템공학부 (전공 심화)",
  },
  {
    title: "부스트캠프 웹·모바일 7기 iOS",
    tag: "챌린지, 멤버십 과정 수료",
    period: "2022.08 - 2022.12",
    description: "네이버 커넥트재단 주관. Swift 학습, 페어 프로그래밍, 협업 프로젝트",
  },
]

export const CERTIFICATIONS: TimelineItem[] = [{ title: "정보처리기사", period: "2024.09" }]

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "모바일", items: ["Swift", "SwiftUI", "UIKit", "Combine", "RxSwift", "Jetpack Compose", "React Native"] },
  { group: "백엔드와 AI", items: ["TypeScript", "NestJS", "TypeORM", "MariaDB", "Python", "FastAPI", "MCP", "Anthropic SDK"] },
  { group: "웹과 인프라", items: ["Next.js", "React", "Tailwind CSS", "Turborepo", "Docker", "GitHub Actions", "AWS S3"] },
]
