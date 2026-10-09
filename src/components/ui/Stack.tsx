import { Plug } from "lucide-react"
import {
  siAmazons3,
  siAnthropic,
  siApple,
  siAxios,
  siDocker,
  siFastapi,
  siFirebase,
  siGithubactions,
  siJetpackcompose,
  siKotlin,
  siMariadb,
  siNaver,
  siNestjs,
  siNextdotjs,
  siPuppeteer,
  siPython,
  siReact,
  siReactivex,
  siSwift,
  siTailwindcss,
  siTurborepo,
  siTypeorm,
  siTypescript,
  type SimpleIcon,
} from "simple-icons"
import BrandIcon from "./BrandIcon"

const BRAND: Record<string, SimpleIcon> = {
  Swift: siSwift,
  SwiftUI: siSwift,
  UIKit: siApple,
  Combine: siApple,
  CoreData: siApple,
  WidgetKit: siApple,
  RxSwift: siReactivex,
  "Jetpack Compose": siJetpackcompose,
  Kotlin: siKotlin,
  "React Native": siReact,
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  NestJS: siNestjs,
  TypeORM: siTypeorm,
  MariaDB: siMariadb,
  Python: siPython,
  FastAPI: siFastapi,
  "Anthropic SDK": siAnthropic,
  "Tailwind CSS": siTailwindcss,
  Turborepo: siTurborepo,
  Docker: siDocker,
  "GitHub Actions": siGithubactions,
  "AWS S3": siAmazons3,
  Firebase: siFirebase,
  FirebaseAnalytics: siFirebase,
  axios: siAxios,
  "react-native-naver-map": siNaver,
  Puppeteer: siPuppeteer,
}

type Props = { items: string[]; className?: string }

// A tool belt: logo + name, no chips. Unknown tools render as plain text.
const Stack = ({ items, className = "" }: Props) => (
  <ul className={`flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--color-muted)] ${className}`}>
    {items.map((name) => {
      const brand = BRAND[name]
      return (
        <li key={name} className="inline-flex items-center gap-1.5 whitespace-nowrap">
          {brand ? (
            <BrandIcon icon={brand} className="h-3.5 w-3.5 text-[var(--color-ink-2)]" />
          ) : name === "MCP" ? (
            <Plug aria-hidden className="h-3.5 w-3.5 text-[var(--color-ink-2)]" strokeWidth={1.75} />
          ) : null}
          {name}
        </li>
      )
    })}
  </ul>
)

export default Stack
