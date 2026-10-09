import { DownloadSimple } from "@phosphor-icons/react/dist/ssr"
import type { DownloadLink } from "@/data/downloadLinks"

type Props = { className?: string; downloadLink: DownloadLink }

const DownloadLinkButton = ({ className, downloadLink }: Props) => (
  <a
    className={`inline-flex w-fit items-center gap-1.5 whitespace-nowrap text-sm text-[var(--color-ink)] underline decoration-[var(--color-rule-strong)] underline-offset-4 transition-colors duration-[var(--dur-short)] hover:decoration-[var(--color-ink)] ${className ?? ""}`}
    target="_blank"
    rel="noopener noreferrer"
    download={downloadLink.downloadName}
    href={downloadLink.link}
  >
    <DownloadSimple aria-hidden className="h-3.5 w-3.5" />
    {downloadLink.name}
  </a>
)

export default DownloadLinkButton
