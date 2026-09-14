import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Ja } from "@/components/Ja";

export function SectionHeading({ eyebrow, title, lead, align }: { eyebrow: string; title: string; lead?: string; align?: "center" }) {
  return (
    <div className={`head ${align === "center" ? "center" : ""}`}>
      <p className="tag">{eyebrow}</p>
      <h2><Ja>{title}</Ja></h2>
      {lead && <p><Ja>{lead}</Ja></p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: string }) {
  return (
    <div className="page-hero">
      <div className="container">
        <p className="tag">{eyebrow}</p>
        <h1>{typeof title === "string" ? <Ja>{title}</Ja> : title}</h1>
        <p><Ja>{lead}</Ja></p>
      </div>
    </div>
  );
}

export function Breadcrumb({ current, path }: { current: string; path: string }) {
  return (
    <nav className="container crumb" aria-label="パンくずリスト">
      <Link href="/">トップ</Link>
      <span aria-hidden="true">›</span>
      <span aria-current="page">{current}</span>
      <span hidden>{path}</span>
    </nav>
  );
}

export function ReservationCTA() {
  return (
    <section className="book-cta">
      <div className="container book-cta-inner">
        <div>
          <h2><Ja>まずはお気軽にご相談ください</Ja></h2>
          <p><Ja>Web予約なら24時間いつでも空き状況を確認できます。お電話でのご相談も承っています。</Ja></p>
        </div>
        <div className="book-cta-actions">
          <a className="btn book" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer"><small>24時間受付</small>Web予約する ↗</a>
          <a className="btn ghost" href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
        </div>
      </div>
    </section>
  );
}
