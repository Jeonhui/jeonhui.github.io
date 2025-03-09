import { Link } from "@design/components"
import { DownloadsIcon } from "@design/assets/icon"

type DownloadLink = {
  name: string
  downloadName: string
  link: string
}

type DownloadLinkButtonProps = {
  downloadLink: DownloadLink
}

const DownloadLinkButton = ({ downloadLink }: DownloadLinkButtonProps) => {
  return (
    <Link
      size={"small"}
      target={"_blank"}
      download={downloadLink.downloadName}
      href={downloadLink.link}
      color={"border"}
      leftIcon={<DownloadsIcon />}
    >
      {downloadLink.name}
    </Link>
  )
}

export type { DownloadLink }
export default DownloadLinkButton
