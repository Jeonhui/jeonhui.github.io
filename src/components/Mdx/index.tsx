"use client"

import { JSX } from "react"
import { Section } from "@design/components"
import { MDXProps } from "mdx/types"
import mdxDesignSystemComponents from "./mdxDesignSystemComponents"
import * as styles from "./styles.css"

type MdxContentProps = {
  content: (props: MDXProps) => JSX.Element
}

const MdxContent = ({ content }: MdxContentProps) => {
  return (
    <Section
      className={styles.mdxSection}
      alignment={"columnTopLeft"}
      animate={true}
      gap={"xLarge"}
    >
      {content({
        components: mdxDesignSystemComponents,
      })}
    </Section>
  )
}

export default MdxContent
