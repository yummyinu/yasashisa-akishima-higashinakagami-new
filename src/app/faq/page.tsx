import type { Metadata } from "next";
import { PageHero, Breadcrumb, ReservationCTA } from "@/components/UI";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "やさしさ 昭島東中神整骨院によく寄せられる質問をまとめました。",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow="よくある質問" title="よくある質問" lead="ご予約前に気になることをまとめました。掲載のない内容はお電話でお気軽にお問い合わせください。" />
      <Breadcrumb current="よくある質問" path="/faq" />
      <section className="section">
        <div className="container">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}
