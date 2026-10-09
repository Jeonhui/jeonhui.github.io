export type DownloadLink = {
  name: string
  downloadName: string
  link: string
}

type DownloadLinkItems = {
  resume: DownloadLink
  /** Set once a real portfolio PDF exists; the button is hidden while this is undefined. */
  portfolio?: DownloadLink
}

// TODO: 포트폴리오 PDF가 준비되면 portfolio 항목을 추가하세요.
const downloadLinks: DownloadLinkItems = {
  resume: {
    name: "이력서 PDF",
    downloadName: "이전희_이력서.pdf",
    link: "https://docs.google.com/uc?export=download&id=1ax1PfxjiIY3Hhlix4_AW_CAsIBMgmTP6&confirm=t",
  },
}

export default downloadLinks
