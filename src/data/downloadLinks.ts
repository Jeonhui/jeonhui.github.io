import { DownloadLink } from "@/components"

type DownloadLinks = {
  resume: DownloadLink
}

const downloadLinks: DownloadLinks = {
  resume: {
    name: "이력서 다운로드",
    downloadName: "이전희_이력서.pdf",
    link: "/files/resume.pdf",
  },
}

export default downloadLinks
