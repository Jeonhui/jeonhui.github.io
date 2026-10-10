# jeonhui.com

이전희의 개인 사이트입니다. 의약품 정산 SaaS를 만드는 소프트웨어 엔지니어로서의 경력, 프로젝트, 이력서를 담고 있습니다.

## 화면 구성

- **홈**: 직접 작성한 WebGL2 셰이더로 그린 별 무리와 밤 구름. 별은 드래그로 회전하고, 커서 근처에서 밀려나며, 스크롤하면 카메라가 성단 안으로 들어갑니다.
- **경력**: 코쏘(COCSO) 시스템 구성도. 흐름(정산, 처방통계 OCR, 전자계약, AI 어시스턴트)을 고르면 해당 경로로 데이터가 흐르는 애니메이션이 재생됩니다.
- **포트폴리오 / 이력서**: 같은 데이터(`src/data/profile.ts`)에서 정적으로 만듭니다. 이력서는 인쇄용 스타일을 포함합니다.
- 페이지 사이를 이동할 때 View Transitions로 전환되며, `prefers-reduced-motion`이면 모든 애니메이션이 꺼집니다.

## 기술

- Next.js 15 (static export), React 19, TypeScript
- Tailwind CSS + 디자인 토큰(`src/app/tokens.css`), 규칙은 [`design.md`](design.md)
- WebGL2 / GLSL (별, 구름), SVG + SMIL (구성도)
- framer-motion (LazyMotion), next-view-transitions
- Phosphor Icons, simple-icons, Pretendard (dynamic subset)

## 데이터

- GitHub 기여 기록은 **빌드 시점**에 공개 프로필 그래프에서 가져와 HTML에 넣습니다. 토큰이 필요 없습니다. 평면 잔디와 3D 스카이라인을 오가는 캔버스 차트(`src/components/ui/contribution-skyline.tsx`)로 그립니다.
- 배포 워크플로가 매일 자정(KST)에 다시 빌드해 데이터를 갱신합니다.

## 개발

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # 정적 결과물: out/
pnpm og       # 링크 미리보기 이미지(public/preview.jpg) 다시 만들기, Chrome 필요
```

프로젝트 스크린샷은 `public/images/projects/`에 1400px(`name.webp`), 1000px(`name-1000.webp`), 700px(`name-700.webp`) 세 크기로 둡니다. 원본은 `portfolio/images/`에 있습니다.

## 배포

`main`에 push하면 GitHub Actions가 빌드해 GitHub Pages(jeonhui.com)에 배포합니다.

## 연락처

[l06094@gmail.com](mailto:l06094@gmail.com)
