import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SectionHeading({ eyebrow, title, lead, align = "left" }: { eyebrow: string; title: string; lead?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "is-center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{lead && <p className="section-lead">{lead}</p>}</div>;
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <div className="page-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{lead}</p></div></div>;
}

export function ReservationCTA() {
  return <section className="reservation-cta"><div className="container reservation-inner"><div><p className="eyebrow light">RESERVATION</p><h2>気になる不調を、まずはご相談ください</h2><p>お身体の状態を丁寧に伺い、無理のない施術をご提案します。</p></div><a className="button button-white" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Webで空き状況を見る ↗</a></div></section>;
}

export function Breadcrumb({ current }: { current: string }) { return <nav className="breadcrumb container" aria-label="パンくず"><Link href="/">トップ</Link><span aria-hidden="true">›</span><span>{current}</span></nav>; }
