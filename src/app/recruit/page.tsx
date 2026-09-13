import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb, SectionHeading } from "@/components/UI";
import { Ja } from "@/components/Ja";
import { recruitData as r } from "@/data/recruit";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "株式会社フチ 採用情報",
  description: "株式会社フチでは、やさしさ 昭島東中神整骨院で働く柔道整復師・施術者を募集しています。新卒・中途・未経験相談可。",
  alternates: { canonical: "/recruit" },
};

const datePosted = "2026-09-13";
const validThrough = "2026-12-12";
const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: r.position,
  description: "整骨院業務全般、患者様の状態確認と問診、指圧・矯正などの施術、通院計画の説明と日常生活のアドバイス、受付・接客・院内業務を担当していただきます。新卒・中途・未経験相談可で、技術と接客を段階的に学べる研修制度があります。",
  identifier: { "@type": "PropertyValue", name: "株式会社フチ", value: "yasashisa-higashinakagami-recruit" },
  datePosted,
  validThrough,
  employmentType: "FULL_TIME",
  hiringOrganization: { "@type": "Organization", name: "株式会社フチ", sameAs: siteConfig.url },
  jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", streetAddress: "玉川町3-18-13", addressLocality: "昭島市", addressRegion: "東京都", postalCode: "196-0034", addressCountry: "JP" } },
  baseSalary: { "@type": "MonetaryAmount", currency: "JPY", value: { "@type": "QuantitativeValue", minValue: 250000, maxValue: 600000, unitText: "MONTH" } },
};

const people = [
  "やりたいことがある方",
  "仲間と何かを作りたい方",
  "自分の可能性を広げたい方",
  "新しいことに挑戦したい方",
  "まだやりたいことが明確でない方",
  "人との信頼関係を大切にできる方",
  "技術だけでなく接客も学びたい方",
  "将来的に独立や経営にも興味がある方",
];

const recruitFaqs = [
  { q: "新卒や実務未経験でも応募できますか？", a: "新卒・中途を問わず、未経験の方もご相談いただけます。技術と接客を段階的に学ぶ研修を用意しています。" },
  { q: "どのような研修がありますか？", a: "指圧・矯正・身体に関する知識に加え、問診、通院指導、挨拶、接客、コミュニケーションを学びます。" },
  { q: "院内見学や応募はできますか？", a: "お電話またはInstagramのDMからご相談・お申し込みいただけます。院内見学のご希望もお気軽にお問い合わせください。" },
];

export default function RecruitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd).replace(/</g, "\\u003c") }} />
      <section className="recruit-hero">
        <div className="container">
          <p className="eyebrow light">株式会社フチ 採用情報</p>
          <h1><Ja>好きで溢れる世界を、仲間とつくる。</Ja></h1>
          <p><Ja>やりたいことを、やりたい人と、全力で楽しむ。株式会社フチは、一人ひとりの個性と挑戦を大切にする会社です。</Ja></p>
          <a className="button button-white" href="#requirements">募集要項を見る</a>
        </div>
      </section>
      <Breadcrumb current="採用情報" path="/recruit" />

      <section className="section">
        <div className="container first-intro recruit-about">
          <div>
            <SectionHeading eyebrow="会社について" title="株式会社フチについて" />
            <p><Ja>株式会社フチは、「好き嫌いで仕事をする」というユニークな価値観を大切にし、本当にやりたいことを、信頼できる仲間とともに形にしていく企業です。</Ja></p>
            <p><Ja>現在は整骨院事業を2店舗展開しながら、今後は飲食や建築など、分野にとらわれず、興味や人との縁を大切に事業展開していきます。</Ja></p>
            <p><Ja>私たちは「人ありき」の会社です。経歴や年齢だけではなく、「この人と一緒に働きたいと思えるか」を大切にしています。</Ja></p>
          </div>
          <Image src="/images/yasashisa/counseling.jpg" alt="やさしさ 昭島東中神整骨院で患者様と向き合うスタッフ" width={700} height={520} sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
      </section>

      <section className="section recruit-values">
        <div className="container">
          <SectionHeading eyebrow="大切にする価値観" title="好き嫌いで仕事をする" lead="自分の心が動くことを大切にし、信頼できる仲間と一緒に形にしていく。自由な発想と責任ある挑戦が、フチの仕事です。" />
          <div className="recruit-story">
            <p><Ja>やりたいことがあれば、社内で提案し、仲間と一緒に実現していける環境があります。</Ja></p>
            <p><Ja>信頼できる仲間がいるからこそ、自由な発想や新しい挑戦が自然と生まれます。</Ja></p>
          </div>
          <div className="stats">
            <article><strong>2店舗</strong><span><Ja>整骨院を展開</Ja></span></article>
            <article><strong>70名以上</strong><span><Ja>1店舗・1日平均来院数</Ja></span></article>
            <article><strong>新しい事業へ</strong><span><Ja>飲食や建築など、分野を越えた挑戦</Ja></span></article>
          </div>
        </div>
      </section>

      <section className="section recruit-work">
        <div className="container recruit-split">
          <div>
            <SectionHeading eyebrow="整骨院事業" title="患者様を心から元気にする仕事" lead="技術だけでなく、状態を丁寧に伺い、分かりやすく説明する接客も大切にしています。" />
            <ul className="check-list">{r.responsibilities.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul>
          </div>
          <div className="recruit-opportunity">
            <p className="eyebrow">フチで実現できること</p>
            <h2><Ja>施術者の先にも、挑戦できる道があります</Ja></h2>
            <p><Ja>施術や接客の力を磨きながら、将来の独立や経営、新しい事業の提案にも挑戦できます。やりたいことを、仲間と一緒に形にしていける会社です。</Ja></p>
          </div>
        </div>
      </section>

      <section className="section pale">
        <div className="container">
          <SectionHeading eyebrow="歓迎する人物像" title="こんな方を歓迎します" />
          <div className="people-grid">{people.map((person) => <div key={person}><Ja>{person}</Ja></div>)}</div>
          <p className="support-copy"><Ja>今は明確な目標がなくても、仲間との仕事やさまざまな経験を通じて、自分のやりたいことを見つけていけます。</Ja></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="研修・教育制度" title="技術と接客、両方を学ぶ" lead="一人ひとりの経験に合わせ、施術技術と患者様との向き合い方を段階的に学びます。" />
          <div className="training-groups">
            <section><h3>技術研修</h3><ul>{r.training.slice(0, 5).map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul></section>
            <section><h3>接客研修</h3><ul>{r.training.slice(5).map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul></section>
          </div>
        </div>
      </section>

      <section className="section recruit-environment">
        <div className="container recruit-split">
          <div>
            <SectionHeading eyebrow="働く環境" title="幅広い経験を積める院" />
            <ul className="check-list">{r.workplace.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul>
          </div>
          <div>
            <SectionHeading eyebrow="福利厚生" title="挑戦を支える制度" />
            <ul className="benefit-list">{r.benefits.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul>
          </div>
        </div>
      </section>

      <section id="requirements" className="section">
        <div className="container">
          <SectionHeading eyebrow="求人条件" title="募集要項" />
          <dl className="requirements">
            <div><dt>職種</dt><dd><Ja>{r.position}</Ja></dd></div>
            <div><dt>雇用形態</dt><dd><Ja>{`${r.employment}（${r.categories.join("・")}）`}</Ja></dd></div>
            <div><dt>給与</dt><dd><strong>{r.salary}</strong><ul>{r.salaryNotes.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul></dd></div>
            <div><dt>勤務時間</dt><dd><ul>{r.hours.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul></dd></div>
            <div><dt>休日・休暇</dt><dd><ul>{r.holidays.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul></dd></div>
            <div><dt>福利厚生</dt><dd><ul className="two-column-list">{r.benefits.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul></dd></div>
          </dl>
        </div>
      </section>

      <section className="section pale">
        <div className="container">
          <SectionHeading eyebrow="採用について" title="よくある質問" />
          <div className="faq-list">{recruitFaqs.map((item) => <details key={item.q}><summary><Ja>{item.q}</Ja></summary><p><Ja>{item.a}</Ja></p></details>)}</div>
        </div>
      </section>

      <section className="section clinic-links">
        <div className="container">
          <SectionHeading eyebrow="院のご案内" title="実際に働く院を見る" />
          <div className="inline-actions">
            <Link className="button" href="/gallery">院内紹介を見る</Link>
            <Link className="button button-outline" href="/first">施術の流れを見る</Link>
            <Link className="button button-outline" href="/access">アクセスを見る</Link>
            <Link className="button button-outline" href="/#instagram">Instagramを見る</Link>
          </div>
        </div>
      </section>

      <section className="reservation-cta recruit-contact">
        <div className="container reservation-inner">
          <div>
            <p className="eyebrow">応募・院内見学</p>
            <h2><Ja>応募受付について</Ja></h2>
            <p><Ja>お電話またはInstagramのDMからご相談・お申し込みいただけます。院内見学のご希望もお気軽にお問い合わせください。</Ja></p>
          </div>
          <div className="reservation-actions">
            <a className="button button-reserve" href={`tel:${siteConfig.phone}`}><span className="button-kicker">お電話でのご相談</span><span>{siteConfig.phone}</span></a>
            <a className="button button-white" href={siteConfig.instagram.profileUrl} target="_blank" rel="noopener noreferrer">InstagramのDMで相談する ↗</a>
          </div>
        </div>
      </section>
    </>
  );
}
