import { Container, Link } from "@design-system/components"
import ItemContainer from "../ItemContainer"
import { ReactElement } from "react"
import { DownloadLink, DownloadLinkButton } from "@/components"

type LinkItem = {
  icon: ReactElement
  name: string
  href: string
}

type LinksContentProps = {
  linkItems: LinkItem[]
  downloadItems: DownloadLink[]
}

const LinksDownloadsContent = ({
  linkItems,
  downloadItems,
}: LinksContentProps) => {
  return (
    <ItemContainer title={"Download & Links"}>
      {
        <Container
          alignment={"columnTopLeft"}
          gap={"small"}
          layout={"fullWidth"}
        >
          {downloadItems.map((item, idx) => (
            <DownloadLinkButton key={idx} downloadLink={item} />
          ))}
          {linkItems.map((item, idx) => (
            <Link
              key={idx}
              color={"text"}
              leftIcon={item.icon}
              href={item.href}
              size={"xSmall"}
            >
              {item.name}
            </Link>
          ))}
        </Container>
      }
    </ItemContainer>
  )
}

export type { LinkItem }
export default LinksDownloadsContent
