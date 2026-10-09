import type { MetadataRoute } from "next"
import { INFO } from "@/constants"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${INFO.BASE_URL}/sitemap.xml`,
  }
}
