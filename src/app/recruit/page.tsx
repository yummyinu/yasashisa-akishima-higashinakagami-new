import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, ReservationCTA, SectionHeading } from "@/components/UI";
import { Ja } from "@/components/Ja";
import { recruitData } from "@/data/recruit";
import { siteConfig } from "@/config/site";
import { InstagramIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "採用情報",
  description: "やさしさ 昭島東中神整骨院を運営する株式会社フチの採用情報。柔道整復師・施術者を募集しています。",
  alternates: { canonical: "/recruit" },
};

export default function RecruitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: recruitData.position,
    description: "整骨院での柔道整復師業務全般。問診・施術・通院指導・接客までを担当していただきます。",
    datePosted: "2026-09-13",
    validThrough: "2026-12-12",
    employmentType: "FULL_TIME",
    hiringOrganization: { "@type": "Organization", name: siteConfig.company, sameAs: siteConfig.url },
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", streetAddress: "玉川町3-18-13", addressLocality: "昭島市", addressRegion: "東京都", postalCode: "196-0034", addressCountry: "JP" } },
    baseSalary: { "@type": "MonetaryAmount", currency: "JPY", value: { "@type": "QuantitativeValue", minValue: 250000, maxValue: 600000, unitText: "MONTH" } },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="recruit-hero">
        <div className="container">
          <p className="tag">採用情報</p>
          <h1><Ja>好きで溢れる世界を、仲間とつくる。</Ja></h1>
          <p><Ja>株式会社フチでは、経験や年齢だけではなく「この人と一緒に働きたいと思えるか」を大切に採用を行っています。</Ja></p>
          <div className="stat-row" style={{ marginTop: "2.5rem" }}>
            <article><strong>{recruitData.salary}</strong><span>月給</span></article>
            <article><strong>週休2日</strong><span>年間休日105日</span></article>
            <article><strong>{recruitData.categories.join("・")}</strong><span>応募資格</span></article>
          </div>
        </div>
      </div>
      <Breadcrumb current="採用情報" path="/recruit" />

      <section className="section tint">
        <div className="container intro-split">
          <Image src="/images/yasashisa/counseling.jpg" alt="やさしさ 昭島東中神整骨院で患者様と向き合うスタッフ" width={700} height={520} />
          <div>
            <SectionHeading eyebrow="募集職種" title={recruitData.position} />
            <ul className="plain-list">
              {recruitData.responsibilities.map((item) => <li key={item}><Ja>{item}</Ja></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container recruit-split">
          <div>
            <SectionHeading eyebrow="働く環境" title="研修体制と職場の様子" />
            <ul className="plain-list">
              {recruitData.workplace.map((item) => <li key={item}><Ja>{item}</Ja></li>)}
            </ul>
          </div>
          <div className="opportunity-box">
            <h2><Ja>研修で身につくこと</Ja></h2>
            <ul className="pill-list">{recruitData.training.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHeading eyebrow="待遇・福利厚生" title="給与・休日・福利厚生" />
          <div className="training-cols">
            <section>
              <h3><Ja>給与・手当</Ja></h3>
              <ul>{recruitData.salaryNotes.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul>
            </section>
            <section>
              <h3><Ja>勤務・休日</Ja></h3>
              <ul>{[...recruitData.hours, ...recruitData.holidays].map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul>
            </section>
          </div>
          <div style={{ marginTop: "1.2rem" }} className="training-cols">
            <section style={{ gridColumn: "1 / -1" }}>
              <h3><Ja>福利厚生</Ja></h3>
              <ul className="pill-list" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>{recruitData.benefits.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="募集要項" title="応募資格・雇用条件" />
          <dl className="req-table">
            <div><dt>雇用形態</dt><dd>{recruitData.employment}</dd></div>
            <div><dt>応募資格</dt><dd>{recruitData.categories.join("・")}</dd></div>
            <div><dt>給与</dt><dd>{recruitData.salary}</dd></div>
            <div><dt>勤務時間</dt><dd><ul>{recruitData.hours.map((item) => <li key={item}>{item}</li>)}</ul></dd></div>
            <div><dt>休日・休暇</dt><dd><ul>{recruitData.holidays.map((item) => <li key={item}>{item}</li>)}</ul></dd></div>
          </dl>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHeading eyebrow="応募方法" title="応募・お問い合わせについて" lead="お電話またはInstagramのDMから、お気軽にお問い合わせください。" />
          <div className="apply-grid">
            <a href={`tel:${siteConfig.phone}`}><PhoneIcon />{siteConfig.phone}</a>
            <a href={siteConfig.instagram.profileUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon />Instagramでお問い合わせ ↗</a>
          </div>
        </div>
      </section>

      <ReservationCTA />
    </>
  );
}
