import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/first", "/treatment", "/gallery", "/access", "/faq", "/recruit", "/news", "/privacy"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/recruit" ? .8 : .7 })); }
