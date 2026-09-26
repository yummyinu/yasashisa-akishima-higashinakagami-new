import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Ja } from "@/components/Ja";

export function KujiraLink({ flushTop }: { flushTop?: boolean }) {
  return (
    <section className={`section kujira-link-section${flushTop ? " flush-top" : ""}`} aria-labelledby="kujira-link-title">
      <div className="container">
        <a className="kujira-link" href={siteConfig.kujiraUrl} target="_blank" rel="noopener noreferrer">
          <span className="kujira-link-photo">
            <Image src="/images/kujira/treatment-room.jpg" alt="くじら整骨院の院内" fill sizes="(max-width: 760px) 100vw, 45vw" />
            <Image className="kujira-link-logo" src="/images/kujira/logo.jpg" alt="" width={96} height={96} />
          </span>
          <span className="kujira-link-body">
            <span className="tag on-dark">群馬県高崎市・姉妹院</span>
            <strong id="kujira-link-title"><Ja>高崎のくじら整骨院はこちら</Ja></strong>
            <span className="btn">くじら整骨院のサイトへ ↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, lead, align }: { eyebrow: string; title: string; lead?: string; align?: "center" }) {
  return (
    <div className={`head ${align === "center" ? "center" : ""}`}>
      <p className="tag"><Ja>{eyebrow}</Ja></p>
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
