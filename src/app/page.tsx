/* Hallmark · genre: atmospheric · macrostructure: Marquee Hero · design-system: design.md · designed-as-app
 * enrichment: Tier-B hand-built WebGL starfield (interactive) · nav: N5 · footer: Ft5 */
import NextLink from "next/link"
import {
  DownloadLinkButton,
  ExperienceList,
  GithubContent,
  GithubContributions,
  Hero,
  OpenSourceList,
  ProfileDetails,
  ProjectList,
  Section,
} from "@/components"
import { getPublicContributions } from "@/apis/github"
import { downloadLinks, EXPERIENCES, PROFILE, PROJECTS } from "@/data"

const apps = PROJECTS.filter((p) => p.kind === "app")
const openSource = PROJECTS.filter((p) => p.kind === "opensource")

export default async function Home() {
  const contributions = await getPublicContributions()

  return (
    <>
      <Hero />

      <div className="mx-auto w-full max-w-[880px] px-5">
        <section className="flex flex-col gap-[var(--space-md)] pt-[var(--space-3xl)] pb-[var(--space-lg)]">
          <p className="max-w-[40ch] text-[clamp(1.25rem,2.4vw,1.5rem)] leading-[1.6] tracking-[-0.01em] text-[var(--color-ink)] text-pretty">
            {PROFILE.intro[0]}
          </p>
          <p className="max-w-[60ch] text-[15px] leading-7 text-[var(--color-ink-2)] text-pretty">{PROFILE.intro[1]}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <NextLink
              href="/portfolio"
              className="text-sm text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors duration-[var(--dur-short)] hover:decoration-[var(--color-ink)]"
            >
              포트폴리오 보기
            </NextLink>
            <DownloadLinkButton downloadLink={downloadLinks.resume} />
          </div>
        </section>
      </div>

      <div className="mx-auto w-full max-w-[880px] px-5">
        <Section id="experience" title="경력" space="tight">
          <ExperienceList items={EXPERIENCES} />
        </Section>

        <Section
          id="projects"
          title="프로젝트"
          lead="코쏘 이전, iOS 개발자로 만들고 운영한 앱입니다."
          action={{ label: "자세히", href: "/portfolio#projects" }}
          space="loose"
        >
          <ProjectList items={apps} />
        </Section>

        <Section id="code" title="코드" lead="회사 코드는 비공개라, 공개 저장소와 GitHub 활동만 보여드립니다." action={{ label: "GitHub", href: PROFILE.github, external: true }}>
          <div className="grid gap-[var(--space-2xl)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <div className="flex flex-col gap-[var(--space-sm)]">
              <h3 className="text-sm font-medium text-[var(--color-muted)]">직접 만들어 공개한 라이브러리</h3>
              <OpenSourceList items={openSource} />
            </div>
            <div className="flex min-w-0 flex-col gap-3">
              <GithubContributions calendar={contributions} />
              <GithubContent />
            </div>
          </div>
        </Section>

        <Section id="profile" title="그 밖에" space="tight">
          <ProfileDetails />
        </Section>
      </div>
    </>
  )
}
