"use client"

import { Layout } from "@design/components"
import Main from "@/content/resume.mdx"
import MdxContent from "@/components/Mdx"

const Resume = () => {
  return (
    <Layout scrollSnapMandatory={false}>
      <MdxContent content={Main} />
    </Layout>
  )
}

export default Resume
