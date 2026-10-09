import type { MetadataRoute } from "next"
import { INFO } from "@/constants"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/portfolio", "/resume"].map((path) => ({
    url: `${INFO.BASE_URL}${path}`,
    lastModified: new Date(),
  }))
}
