export type DownloadLink = {
  name: string
  downloadName: string
  link: string
}

type DownloadLinkItems = {
  resume: DownloadLink
  portfolio: DownloadLink
}

// TODO: 포트폴리오 PDF 링크가 이력서와 동일함 - 실제 파일로 교체 필요
const downloadLinks: DownloadLinkItems = {
  resume: {
    name: "이력서 PDF",
    downloadName: "이전희_이력서.pdf",
    link: "https://docs.google.com/uc?export=download&id=1ax1PfxjiIY3Hhlix4_AW_CAsIBMgmTP6&confirm=t",
  },
  portfolio: {
    name: "포트폴리오 PDF",
    downloadName: "이전희_포트폴리오.pdf",
    link: "https://docs.google.com/uc?export=download&id=1ax1PfxjiIY3Hhlix4_AW_CAsIBMgmTP6&confirm=t",
  },
}

export default downloadLinks
