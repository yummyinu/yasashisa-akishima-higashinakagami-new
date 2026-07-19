import type { Metadata } from "next";
import { Breadcrumb, PageHero, ReservationCTA } from "@/components/UI";
import { faqs } from "@/data/site";
export const metadata: Metadata = { title: "よくある質問", description: "予約、服装、お子さま連れ、駐車場、保険施術についてお答えします。" };
export default function FAQPage() { const jsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }; return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><PageHero eyebrow="FAQ" title="よくある質問" lead="初めての方からよくいただくご質問をまとめました。ほかにも気になることがあれば、来院時にお気軽にお尋ねください。" /><Breadcrumb current="よくある質問" /><section className="section"><div className="container faq-list faq-page">{faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section><ReservationCTA /></>; }
