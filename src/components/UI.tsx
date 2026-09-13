import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Ja } from "@/components/Ja";

export function SectionHeading({ eyebrow, title, lead, align = "left" }: { eyebrow: string; title: string; lead?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading ${align === "center" ? "is-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2><Ja>{title}</Ja></h2>
      {lead && <p className="section-lead"><Ja>{lead}</Ja></p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: React.ReactNode; lead: string }) {
  return (
    <div className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{typeof title === "string" ? <Ja>{title}</Ja> : title}</h1>
        <p><Ja>{lead}</Ja></p>
      </div>
    </div>
  );
}

export function ReservationCTA() {
  return (
    <section className="reservation-cta">
      <div className="container reservation-inner">
        <div>
          <p className="eyebrow">ご予約・ご相談</p>
          <h2><Ja>気になる不調を、まずはご相談ください</Ja></h2>
          <p><Ja>お身体の状態を丁寧に伺い、無理のない施術をご提案します。</Ja></p>
        </div>
        <div className="reservation-actions">
          <a className="button button-reserve" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">
            <span className="button-kicker">24時間受付</span><span>Webで空き状況を見る <span aria-hidden="true">↗</span></span>
          </a>
          <Link className="button button-white" href="/access">アクセスを確認する</Link>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({ current, path }: { current: string; path: string }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "トップ", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: current, item: `${siteConfig.url}${path}` }] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><nav className="breadcrumb container" aria-label="パンくず"><Link href="/">トップ</Link><span aria-hidden="true">›</span><span aria-current="page">{current}</span></nav></>;
}

