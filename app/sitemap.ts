import type { MetadataRoute } from "next";
import { getSiteUrl } from "./siteMetadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl.toString(),
      lastModified: new Date("2026-05-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
