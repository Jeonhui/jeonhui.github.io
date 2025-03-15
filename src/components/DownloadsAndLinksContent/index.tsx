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

const DownloadsAndLinksContent = ({
  linkItems,
  downloadItems,
}: LinksContentProps) => {
  return (
    <ItemContainer title={"Downloads & Links"} titleSize={"small"}>
      {
        <Container
          alignment={"columnTopLeft"}
          gap={"small"}
          layout={"fullWidth"}
        >
          <Container
            alignment={"rowTopLeft"}
            gap={"small"}
            layout={"fullWidth"}
          >
            {downloadItems.map((item, idx) => (
              <DownloadLinkButton key={idx} downloadLink={item} />
            ))}
          </Container>
          <Container
            alignment={"rowTopLeft"}
            gap={"small"}
            layout={"fullWidth"}
          >
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
        </Container>
      }
    </ItemContainer>
  )
}

export type { LinkItem }
export default DownloadsAndLinksContent
