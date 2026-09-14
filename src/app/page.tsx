import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InstagramSection } from "@/components/instagram/InstagramSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ReservationCTA, SectionHeading } from "@/components/UI";
import { Ja } from "@/components/Ja";
import { concerns, faqs, gallery, treatments } from "@/data/site";
import { recruitData } from "@/data/recruit";
import { siteConfig } from "@/config/site";
import { BookIcon, BuildingIcon, CalendarIcon, CheckIcon, ClockIcon, HandIcon, MapPinIcon, MessageIcon, SmartphoneIcon, UsersIcon } from "@/components/Icons";

export const metadata: Metadata = {
  description: "昭島市・東中神駅南口から徒歩4分の整骨院「やさしさ 昭島東中神整骨院」。全身整体・骨盤矯正・首肩腰の施術に対応し、Web予約で24時間受付しています。",
  alternates: { canonical: "/" },
};

const linkCards = [
  { href: "/first", Icon: BookIcon, title: "初めての方へ", text: "ご来院前に読みたい情報", image: "/images/yasashisa/counseling.jpg" },
  { href: "/treatment", Icon: HandIcon, title: "施術・メニュー", text: "症状別のアプローチ", image: "/images/yasashisa/back-treatment.jpg" },
  { href: "/gallery", Icon: BuildingIcon, title: "院内紹介", text: "設備と雰囲気", image: "/images/yasashisa/clinic-original.jpg" },
  { href: "/access", Icon: MapPinIcon, title: "アクセス", text: "駅からの道順・駐車場", image: "/images/yasashisa/kids-space.jpg" },
  { href: "/faq", Icon: MessageIcon, title: "よくある質問", text: "気になることを解消", image: "/images/yasashisa/neck-treatment.jpg" },
  { href: "/recruit", Icon: UsersIcon, title: "採用情報", text: "スタッフ募集中", image: "/images/yasashisa/stretch-treatment.jpg" },
] as const;

const reasons = [
  { title: "話を聞くことを最優先に", text: "不調の経緯や生活習慣まで確認してから施術方針を組み立てます。" },
  { title: "納得できる説明を", text: "今の身体の状態と施術の考え方を、専門用語に頼らずお伝えします。" },
  { title: "通いやすい立地と設備", text: "駅徒歩4分・駐車場5台。ベッド数も多く、待ち時間を抑えています。" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="tag">昭島市・東中神の整骨院</p>
            <h1><Ja>痛みの理由を確かめてから、施術方針をお伝えします</Ja></h1>
            <p className="lead"><Ja>日常の姿勢や生活習慣まで確認しながら、今の状態に合わせた施術をわかりやすくご説明します。初めての方もお気軽にご相談ください。</Ja></p>
            <div className="btn-row">
              <a className="btn book" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約する ↗</a>
              <Link className="btn ghost" href="/first">初めての方へ</Link>
            </div>
          </div>
          <div className="hero-frame">
            <div className="hero-frame-photo">
              <Image src="/images/yasashisa/clinic-original.jpg" alt="やさしさ 昭島東中神整骨院の明るい院内" fill priority sizes="(max-width: 1100px) 90vw, 40vw" />
            </div>
            <div className="hero-frame-tag"><strong>施術ベッド10台</strong><span>駐車場5台完備</span></div>
          </div>
        </div>
      </section>

      <section className="fact-band" aria-label="医院の特徴">
        <ul className="container fact-row">
          <li><MapPinIcon /><div><small>東中神駅南口</small><strong>徒歩4分</strong></div></li>
          <li><ClockIcon /><div><small>受付時間</small><strong>20時まで</strong></div></li>
          <li><CalendarIcon /><div><small>当日予約</small><strong>空き状況を確認</strong></div></li>
          <li><SmartphoneIcon /><div><small>Web予約</small><strong>24時間受付</strong></div></li>
        </ul>
      </section>

      <section className="section">
        <div className="container trust-block">
          <SectionHeading eyebrow="よくある症状" title="こんな症状でのご来院が多くあります" lead="痛む場所だけにとらわれず、生活習慣や身体の使い方まで確認します。" />
          <ul className="trust-tags">
            {concerns.map((item) => <li key={item}><CheckIcon /><Ja>{item}</Ja></li>)}
          </ul>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHeading eyebrow="サイト内メニュー" title="目的に合わせてすぐ移動できます" align="center" />
          <div className="link-cards">
            {linkCards.map(({ Icon, ...item }) => (
              <Link key={item.href} href={item.href} className="link-card">
                <Image src={item.image} alt="" fill sizes="(max-width: 700px) 50vw, 33vw" />
                <span className="link-card-badge"><Icon /></span>
                <span className="link-card-text"><strong>{item.title}</strong><small><Ja>{item.text}</Ja></small></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="選ばれる理由" title="はじめての方にも安心していただける理由" align="center" />
          <ol className="value-row">
            {reasons.map((item) => <li key={item.title}><h3><Ja>{item.title}</Ja></h3><p><Ja>{item.text}</Ja></p></li>)}
          </ol>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <SectionHeading eyebrow="施術・メニュー" title="身体の状態に合わせてご提案します" lead="お悩みや身体の状態に合わせて、必要な施術をご提案します。" />
          <ul className="treatment-cards">
            {treatments.map((item) => (
              <li key={item.title}>
                <div className="photo"><Image src={item.image} alt={`${item.title}の施術イメージ`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
                <div className="body"><h3><Ja>{item.title}</Ja></h3><p><Ja>{item.text}</Ja></p></div>
              </li>
            ))}
          </ul>
          <Link className="btn ghost" style={{ marginTop: "2rem" }} href="/treatment">施術・メニューを詳しく見る</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="院内紹介" title="明るく、清潔で、安心できる院内" lead="施術ベッド10台を備えた広い空間と、カーテンで仕切れる施術スペースをご用意しています。" />
          <div className="snapshot-strip">{gallery.slice(0, 4).map((item, i) => <Image key={item.src} className={i === 0 ? "wide" : ""} src={item.src} alt={item.alt} width={700} height={520} />)}</div>
          <Link className="btn ghost" style={{ marginTop: "2rem" }} href="/gallery">院内紹介を見る</Link>
        </div>
      </section>

      <InstagramSection />

      <section className="section tint">
        <div className="container visit-panel">
          <div>
            <SectionHeading eyebrow="アクセス" title="東中神駅南口から徒歩4分" lead="駅から近く、院の斜向かいには5台分の駐車場もあります。お仕事帰りやお子さま連れでも通いやすい環境です。" />
            <div className="visit-facts"><p><strong>所在地</strong><Ja>{siteConfig.address}</Ja></p><p><strong>電話番号</strong><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></p><p><strong>診療時間</strong>9:00〜12:30／15:00〜20:00</p><p><strong>定休日</strong>年末年始</p></div>
            <div className="btn-row"><Link className="btn" href="/access">アクセス詳細</Link><a className="btn ghost" href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">Googleマップ ↗</a></div>
          </div>
          <Image src="/images/yasashisa/kids-space.jpg" alt="やさしさ 昭島東中神整骨院の待合・キッズスペース" width={720} height={540} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="よくある質問" title="初めての方の疑問にお答えします" />
          <FAQAccordion items={faqs.slice(0, 3)} />
          <Link className="btn ghost" style={{ marginTop: "2rem" }} href="/faq">よくある質問をもっと見る</Link>
        </div>
      </section>

      <section className="section join-band">
        <div className="container join-panel">
          <div><p className="tag">採用情報</p><h2><Ja>一緒に働く仲間を募集しています</Ja></h2><p className="catch"><Ja>好きで溢れる世界を、仲間とつくる。</Ja></p><p><Ja>株式会社フチでは、経験や年齢だけではなく「この人と一緒に働きたいと思えるか」を大切にしています。</Ja></p></div>
          <div><ul className="join-list">{recruitData.highlights.map((item) => <li key={item}><Ja>{item}</Ja></li>)}</ul><Link className="btn on-dark" href="/recruit">採用情報を見る</Link></div>
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}
