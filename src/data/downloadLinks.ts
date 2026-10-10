export type DownloadLink = {
  name: string
  downloadName: string
  link: string
}

/** Each button is hidden while its entry is undefined, so a dead link never ships. */
type DownloadLinkItems = {
  resume?: DownloadLink
  portfolio?: DownloadLink
}

// TODO: 새 이력서 PDF 링크와 포트폴리오 PDF가 준비되면 추가하세요.
// 예: resume: { name: "이력서 PDF", downloadName: "이전희_이력서.pdf", link: "https://..." }
// (이전 Google Drive 링크는 2026-10 기준 404라 뺐습니다.)
const downloadLinks: DownloadLinkItems = {}

export default downloadLinks
