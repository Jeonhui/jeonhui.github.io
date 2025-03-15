import { DownloadsIcon } from "@design-system/assets/icon"
import { Link } from "@design-system/components"

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
      size={"xSmall"}
      target={"_blank"}
      download={downloadLink.downloadName}
      href={downloadLink.link}
      color={"grayBorder"}
      leftIcon={<DownloadsIcon />}
    >
      {downloadLink.name}
    </Link>
  )
}

export type { DownloadLink }
export default DownloadLinkButton
