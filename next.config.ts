import type { NextConfig } from "next"
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"
import generated from "@next/mdx"

const withVanillaExtract = createVanillaExtractPlugin()

const withMDX = generated({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "out",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

export default withMDX(withVanillaExtract(nextConfig))
