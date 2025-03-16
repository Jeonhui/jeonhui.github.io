"use client"

import { Container } from "@design-system/components"
import { GithubIcon } from "@/assets/icons"
import ItemContainer from "../ItemContainer"
import PinnedItemContainer from "./components/PinnedItemContainer"
import * as styles from "./styles.css"

const GithubContent = ({}) => {
  return (
    <ItemContainer title={"Github"} icon={<GithubIcon />}>
      {
        <Container
          className={styles.contentContainer}
          alignment={"rowTopLeft"}
          gap={"medium"}
          layout={"fullWidth"}
        >
          {/*<ReadMeContainer />*/}
          <PinnedItemContainer />
        </Container>
      }
    </ItemContainer>
  )
}

export default GithubContent
