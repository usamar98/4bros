import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${business.siteUrl}/`, lastModified: "2026-09-15", changeFrequency: "monthly", priority: 1 }];
}
