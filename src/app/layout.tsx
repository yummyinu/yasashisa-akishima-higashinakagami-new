import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { siteConfig } from "@/config/site";
import "./globals.css";

const noto = Noto_Sans_JP({ variable: "--font-noto", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: `${siteConfig.name}｜昭島市・東中神駅徒歩4分`, template: `%s｜${siteConfig.name}` }, description: siteConfig.description, openGraph: { type: "website", locale: "ja_JP", siteName: siteConfig.name, images: ["/images/yasashisa/clinic-hero-generated.webp"] }, alternates: { canonical: "/" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalBusiness", name: siteConfig.name, image: `${siteConfig.url}/images/yasashisa/clinic-hero-generated.webp`, url: siteConfig.url, address: { "@type": "PostalAddress", postalCode: "196-0034", addressRegion: "東京都", addressLocality: "昭島市", streetAddress: "玉川町3-18-13" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "09:00", closes: "20:00" }] };
  return <html lang="ja"><body className={noto.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><Header /><main>{children}</main><Footer /><MobileCTA /></body></html>;
}
