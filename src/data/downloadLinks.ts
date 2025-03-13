import { DownloadLink } from "@/components"

type DownloadLinks = {
  resume: DownloadLink
  portfolio: DownloadLink
}

// TODO: Update download links
const downloadLinks: DownloadLinks = {
  resume: {
    name: "이력서",
    downloadName: "이전희_이력서.pdf",
    link: "https://docs.google.com/uc?export=download&id=1ax1PfxjiIY3Hhlix4_AW_CAsIBMgmTP6&confirm=t",
  },
  portfolio: {
    name: "포트폴리오",
    downloadName: "이전희_포트폴리오.pdf",
    link: "https://docs.google.com/uc?export=download&id=1ax1PfxjiIY3Hhlix4_AW_CAsIBMgmTP6&confirm=t",
  },
}

export default downloadLinks
