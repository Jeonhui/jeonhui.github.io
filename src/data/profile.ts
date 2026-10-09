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
  role: "Software Engineer",
  lead: "의약품 정산 SaaS를 만드는 소프트웨어 엔지니어입니다. 서버와 전자계약, AI 에이전트, 모바일 앱을 직접 만듭니다.",
  intro: [
    "2025년 5월부터 코쏘에서 제약사와 CSO, 딜러사 사이의 수수료 정산 시스템을 만들고 있습니다. 백엔드는 첫 커밋부터 맡았고, 전자계약과 MCP 기반 AI 어시스턴트, iOS·Android 앱도 직접 구현했습니다.",
    "그 전에는 iOS 개발자였습니다. 마인크래프트 리소스 앱 SFOM을 혼자 개발하고 운영했고, 월 사용자는 6.3만 명 규모였습니다.",
  ],
  email: "l06094@gmail.com",
  github: "https://github.com/Jeonhui",
}

export const EXPERIENCES: Experience[] = [
  {
    id: "cocso",
    company: "주식회사 코쏘 (COCSO)",
    role: "Backend Developer, Chief Privacy Officer",
    period: "2025.05 - 현재",
    summary:
      "의약품 영업 위탁(CSO) 구조의 수수료 정산을 처리하는 B2B SaaS입니다. 정산 백엔드는 거의 혼자 설계하고 구현했고(백엔드 커밋의 98%), 전자계약, AI 어시스턴트, 네이티브 앱, 웹과 디자인 시스템까지 맡고 있습니다. 1년 반 동안 12개 저장소에 2,900건 넘게 커밋했습니다.",
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
        title: "정산 백엔드",
        description: "NestJS 모노레포, 앱 8개, 공유 패키지 20개, 엔티티 220여 개",
        summary: "첫 커밋부터 거의 혼자 만들었습니다. 다단계 수수료 계산을 순수 함수 패키지로 떼어내고, 실제 DB에 붙는 테스트로 금액이 1원도 어긋나지 않게 지킵니다.",
        icon: "server",
        points: [
          "첫 커밋부터 GitHub Actions CI/CD(SSH 배포 + PM2)까지 백엔드 전체를 직접 구축 (전체 커밋의 약 98%)",
          "구간요율, 최소정산금액, 이관, 매출차감, 인센티브 등 다단계 수수료 계산을 순수 함수 패키지로 분리하고, 상위·딜러사 정산을 전면 재작성",
          "단위 테스트와 실제 DB에 붙는 통합 테스트(스펙 100여 개)로 금액 회귀를 막고, 반올림 오차·부분 재계산 시 집계 유실·확정 동시성(행 잠금) 등 정합성 문제를 체계적으로 해결",
          "엑셀 업로드 → 자동 계산 → 검산 → 그룹 확정, 확정과 같은 트랜잭션 안에서 하위 정산을 생성하는 흐름 설계",
          "비즈니스 로직을 공유 패키지로 추출해 여러 앱과 MCP 서버가 같은 코드를 재사용하도록 구조화",
          "본인인증, FCM 푸시(outbox 큐·예약 발송), 인앱결제 서버 알림, S3 presigned 업로드, OCR 연동",
          "토큰 오용 차단, 리프레시 토큰 재사용 탐지, 로그 개인정보 마스킹, SSRF 방어, 업로드 멱등 키 등 보안 강화",
        ],
      },
      {
        title: "전자계약 시스템",
        description: "@cocso/contract 라이브러리와 계약 처리 서버, 단독 개발",
        summary: "계약서 생성과 RSA 서명, PDF 발행을 하는 라이브러리, 그리고 서명 상태를 관리하고 알림을 보내는 계약 서버를 혼자 만들었습니다.",
        icon: "signature",
        points: [
          "판촉영업 위탁 계약서·부속합의서를 생성하는 TypeScript 라이브러리를 만들고, RSA 서명과 SHA-256 해시로 무결성 검증 및 버전 이력 관리",
          "Puppeteer 기반 PDF 생성, Changesets로 사내 패키지 배포 (v2.5까지 운영)",
          "서명 상태 전이(작성 → 발신자 서명 → 수신자 서명 → 완료/만료)를 직렬화하고, 알림은 DB 커밋 이후에만 발송",
          "알림톡·메일 통합 알림과 자동 발송 주기, 재위탁 통보 생성 및 부분 실패 시 미발송분만 재시도",
          "PDF 생성 중 좀비 Chromium 프로세스가 쌓이던 문제 해결",
        ],
      },
      {
        title: "MCP와 AI 어시스턴트",
        description: "MCP 서버 4종, AI 게이트웨이, 멀티테넌트 에이전트",
        summary: "회사별로 데이터가 격리된 MCP 서버 4종(client만 도구 70개 이상)과 웹 채팅을 잇는 게이트웨이, 회사마다 따로 뜨는 에이전트를 운영합니다.",
        icon: "bot",
        points: [
          "client · settler · admin · service 4개 MCP 앱 구축. client만 70개 이상의 read-only 도구를 제공하며, 결과는 회사 범위로 격리",
          "OAuth/API 키 인증과 stateless 모드 전환, 회사별 에이전트 라우팅 테이블 설계",
          "웹 채팅과 에이전트 사이를 잇는 SSE 게이트웨이 (턴 이벤트, 파일 이벤트, 역방향 페이징)",
          "일반 회원용 LLM 채팅: Anthropic·OpenAI SDK와 외부 MCP 연결, 일·주·월 토큰 사용 한도, 응답 완료 푸시",
          "오픈소스 Hermes Agent를 포크·경량화한 Python 에이전트를 4계층(Core / 도메인 MCP / 테넌트 / 런타임)으로 재설계하고, 회사별 Docker 컨테이너로 멀티테넌트 운영",
          "도구 계약 스냅샷 테스트와 부팅 없이 DI 그래프를 검사하는 테스트로 서버-MCP 간 동기화 안정성 확보",
        ],
      },
      {
        title: "iOS·Android 앱",
        description: "SwiftUI와 Jetpack Compose 모노레포, 커밋 약 84%",
        summary: "SwiftUI와 Jetpack Compose로 두 플랫폼을 동시에 만들고, 기능 스펙과 매니페스트로 두 앱이 같은 동작을 하는지 기계적으로 검사합니다.",
        icon: "smartphone",
        points: [
          "두 플랫폼을 MVVM으로 동시에 개발하고, 기능 스펙 26개·파리티 매니페스트 24개로 기능 동등성을 기계적으로 검증",
          "카카오·네이버 로그인, 처방통계 사진 업로드와 OCR, 예상 수수료, 의약품 검색, AI 어시스턴트 채팅, 인앱 구매, 강제 업데이트",
          "다크 테마·Dynamic Type 지원, staging/운영 빌드 분리 및 App Store 심사 대응",
        ],
      },
      {
        title: "디자인 시스템과 웹",
        description: "cocso-ui 모바일 확장, Next.js 모노레포",
        summary: "디자인 토큰을 SwiftUI·Compose 컴포넌트로 내보내는 코드젠을 만들었고, 정산 대시보드 웹 앱의 주 작성자입니다.",
        icon: "palette",
        points: [
          "디자인 토큰 코드젠과 SwiftUI·Compose 컴포넌트 패키지를 단독으로 구축하고 iOS 26 Liquid Glass, Android 블러 surface 대응",
          "골든 이미지 시각 회귀 테스트를 CI에 도입하고 전 컴포넌트에 axe 접근성 테스트 적용",
          "CSO 대시보드·정산제약사 앱의 주 작성자로 정산 화면, 셀 단위 키보드 이동이 되는 OCR 통계입력 그리드, 위탁 관계 그래프",
          "디자인 시스템을 어드민·정산·계약 앱 전체에 적용하고, 어드민 공용 UI를 별도 패키지로 승격",
        ],
      },
      {
        title: "OCR, 배치, 고객지원",
        summary: "처방통계 사진 판독 서버를 처음 만들고 약품 조회를 46배 빠르게 했습니다. 일일 수수료 배치와 고객지원 채팅 서버도 맡았습니다.",
        icon: "scan",
        points: [
          "처방통계 사진 판독 API 서버를 처음 구축했고, 약품 마스터(약 8만 행) 디스크 캐시로 조회 46배 단축, OCR 연결 재사용으로 사진당 약 1초 절감, 사업자등록증 판독 경로 개발",
          "일일 수수료 집계 배치를 윈도우 함수로 재작성해 잘못된 결과 수정, shadow 테이블 교체 방식과 증분 배치·경합 가드 도입",
          "웹 앱 4곳에 위젯으로 붙는 고객지원 채팅 서버를 단독 구축. 쿠키 인증을 그대로 쓰기 위해 SSE 선택, Last-Event-ID 재연결 보충, 하트비트, 구독 선행으로 메시지 유실 방지",
        ],
      },
    ],
  },
  {
    id: "ride",
    company: "라이드 주식회사",
    role: "Software Engineer Intern, Product & Tech Development",
    period: "2024.07 - 2024.08",
    summary:
      "React Native와 TypeScript를 학습하며 맛집 추천 플랫폼 “라슐랭”을 개발하고, 사내 React Native 디자인 시스템을 구축했습니다.",
    stack: ["React Native", "TypeScript", "axios", "react-native-naver-map"],
    groups: [
      {
        title: "라슐랭",
        description: "내방역 근처 맛집 추천 앱 (iOS·Android)",
        summary: "지도에 자기 맛집을 등록하고 모아 보는 React Native 앱을 만들었습니다.",
        icon: "map",
        points: [
          "react-native-naver-map으로 사용자가 자신의 맛집을 지도에 등록하고 확인하는 기능 구현",
        ],
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
    subtitle: "스폼, Store FOr Minecraft",
    kind: "app",
    period: "2023.01 - 2024.06 · 18개월",
    summary:
      "Minecraft에서 쓰이는 맵, 스킨, 시드 등의 리소스를 내려받을 수 있는 플랫폼입니다.",
    role: "iOS 애플리케이션 개발 및 운영",
    team: "iOS 1명, Android(PM) 1명, 디자인 1명",
    stack: ["SwiftUI", "Combine", "CoreData", "Alamofire", "Kingfisher", "Firebase"],
    highlights: ["MAU 6.3만", "DAU 3천", "메모리 50-90% 절감"],
    points: [
      "iOS 기준 DAU 3천 명, MAU 6.3만 명 달성",
      "메인 화면 진입 시 메모리 사용량 급증 문제를 확인하고, Kingfisher ImageProcessor를 상속한 리사이징 프로세서를 구현해 메모리 사용량을 50~90% 절감",
      "Firebase(Auth, Query, CollectionReference, DatabaseReference) 인터페이스를 확장해 Combine Publisher를 반환하는 CRUD 계층 구현",
      "UIViewControllerRepresentable로 Google Ads의 Banner·Interstitial 광고를 SwiftUI에 도입해 수익화",
      "iOS 15 SwiftUI Sheet의 높이 조절 한계를 해결하기 위해 FittedSheets-SwiftUI를 직접 만들어 배포",
      "데이터 호출 로직, 네이밍, 구조를 Notion으로 문서화해 AOS 파트와 통일하고 협업 속도 향상",
      "리소스 설치가 어렵다는 피드백을 반영해 설치 가이드 제공",
    ],
    image: "/images/projects/sfom.webp",
    links: [{ label: "App Store", href: "https://apps.apple.com/kr/app/sfom/id1662309817" }],
  },
  {
    id: "briefing",
    name: "Briefing",
    subtitle: "브리핑, AI 뉴스 요약",
    kind: "app",
    period: "2023.09 - 2024.04 · 8개월",
    summary:
      "GPT로 전날의 뉴스 기사를 분석해 주요 키워드와 내용을 요약해 주는 서비스입니다.",
    role: "iOS 팀 리드 및 개발",
    team: "iOS 2명, Android 2명, 백엔드 2명, PM 1명",
    stack: ["UIKit", "RxSwift", "Alamofire", "SnapKit", "WidgetKit", "FirebaseAnalytics"],
    highlights: ["뉴스 부문 22위", "활성 참여 +20%", "iOS 팀 리드"],
    points: [
      "App Store 뉴스 부문 22위",
      "Closure 기반 코드를 RxSwift로 전환해 가독성과 유지보수성 개선",
      "RxSwift가 처음인 팀원과 함께 학습하며 도입해 팀의 반응형 프로그래밍 이해도 향상",
      "새 UI 도입에 맞춰 클린 아키텍처 기반 리팩토링을 주도해 이후 기능 추가 속도 향상",
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
    period: "2023.12 - 2024.03 · 4개월",
    summary:
      "학원의 문제 제출 과정을 앱으로 옮겨 학생들의 수학 문제 해결 능력 향상을 돕는 서비스입니다.",
    role: "iOS 개발, DB 설계, 서버 개발",
    team: "iOS 1명, Android 1명, 프론트엔드 1명",
    stack: ["UIKit", "RxSwift", "Alamofire", "SnapKit", "Kingfisher"],
    highlights: ["iOS + 서버 단독 개발"],
    points: [
      "JWT 토큰을 Keychain(SecItem)에 저장하고 PropertyWrapper로 감싸 안전하고 간편하게 관리",
      "UIImage 확장으로 이미지 비율을 계산해 문제 이미지 크기에 맞게 UIImageView 크기 조정",
      "ProgressBar, 문제 접기/펼치기 등에 애니메이션을 더해 사용성 개선",
    ],
    image: "/images/projects/triggermath.webp",
  },
  {
    id: "fittedsheets-swiftui",
    name: "FittedSheets-SwiftUI",
    kind: "opensource",
    period: "2023.07 - 2024.08",
    summary:
      "UIKit용 FittedSheets를 확장해 iOS 13+ SwiftUI에서 쓸 수 있게 만든 BottomSheet 라이브러리입니다.",
    role: "라이브러리 개발",
    stack: ["SwiftUI", "UIKit", "FittedSheets"],
    highlights: ["Open Source"],
    points: [
      "SwiftUI View 확장으로 기본 .sheet와 동일한 방식으로 사용 가능하게 설계",
      "FittedSheets의 전체 기능 지원",
      "이슈로 제보된 인라인 모드 미동작 문제 해결 (#2)",
      "콘텐츠 크기 변경 시 시트가 자동으로 맞춰지지 않던 문제 해결 (#3)",
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
    summary:
      "CoreData와 Combine을 결합해 NSManagedObject를 직관적으로 다루게 해 주는 라이브러리입니다.",
    role: "라이브러리 개발",
    stack: ["CoreData", "Combine"],
    highlights: ["Open Source"],
    points: [
      "NSManagedObject(DAO)와 Struct(VO)를 분리해 안전한 데이터 관리",
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
    description: "교양 필수 과목 실습 진행 및 과제 피드백",
  },
  {
    title: "한국외국어대학교 「캡스톤 프로젝트 및 실습」 조교",
    period: "2024.01 - 2024.06",
    description: "전공 필수 과목 팀 프로젝트 지원 및 발표 진행",
  },
  {
    title: "UMC HUFS iOS 파트 리더 · 운영진",
    period: "2023.08 - 2024.01",
    description: "35개 대학 연합동아리에서 iOS 파트를 이끌고 행사 운영",
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
    tag: "챌린지, 멤버십 과정",
    period: "2022.08 - 2022.12",
    description: "네이버 커넥트재단. Swift 학습, 페어 프로그래밍, 협업 프로젝트",
  },
]

export const CERTIFICATIONS: TimelineItem[] = [
  { title: "정보처리기사", period: "2024.09" },
]

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "모바일", items: ["Swift", "SwiftUI", "UIKit", "Combine", "RxSwift", "Jetpack Compose", "React Native"] },
  { group: "백엔드와 AI", items: ["TypeScript", "NestJS", "TypeORM", "MariaDB", "Python", "FastAPI", "MCP", "Anthropic SDK"] },
  { group: "웹과 인프라", items: ["Next.js", "React", "Tailwind CSS", "Turborepo", "Docker", "GitHub Actions", "AWS S3"] },
]
