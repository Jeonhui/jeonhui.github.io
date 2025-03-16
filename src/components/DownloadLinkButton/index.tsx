import { DownloadsIcon } from "@design-system/assets/icon"
import { Link } from "@design-system/components"
import { clsx } from "clsx"

type DownloadLink = {
  name: string
  downloadName: string
  link: string
}

type DownloadLinkButtonProps = {
  className?: string
  downloadLink: DownloadLink
}

const DownloadLinkButton = ({
  className,
  downloadLink,
}: DownloadLinkButtonProps) => {
  return (
    <Link
      className={clsx(className)}
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
