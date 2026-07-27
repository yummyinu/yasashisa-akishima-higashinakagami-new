import Image from "next/image";
import Link from "next/link";
import { InstagramSection } from "@/components/instagram/InstagramSection";
import { ReservationCTA, SectionHeading } from "@/components/UI";
import { concerns, faqs, gallery, treatments } from "@/data/site";
import { recruitData } from "@/data/recruit";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "/first", icon: "初", title: "初めての方へ", text: "来院から施術まで", image: "/images/yasashisa/counseling.jpg" },
  { href: "/treatment", icon: "施", title: "施術・メニュー", text: "症状・お悩み別", image: "/images/yasashisa/back-treatment.jpg" },
  { href: "/gallery", icon: "院", title: "院内紹介", text: "明るく清潔な院内", image: "/images/yasashisa/clinic-original.jpg" },
  { href: "/access", icon: "駅", title: "アクセス", text: "東中神駅からの道順", image: "/images/yasashisa/kids-space.jpg" },
  { href: "/faq", icon: "問", title: "よくある質問", text: "初めての方も安心", image: "/images/yasashisa/neck-treatment.jpg" },
  { href: "/recruit", icon: "採", title: "採用情報", text: "一緒に働く仲間を募集", image: "/images/yasashisa/stretch-treatment.jpg" },
] as const;

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-layout">
          <div className="hero-content">
            <p className="hero-kicker">地域の皆さまの身体に、やさしく向き合う整骨院</p>
            <h1>つらいところを聞いて、身体の動きを見てから施術します</h1>
            <p>お悩みの背景まで丁寧に伺い、今の状態と施術方針を分かりやすくお伝えします。初めての方も安心してご相談ください。</p>
            <div className="hero-actions">
              <a className="button button-reserve" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約する ↗</a>
              <Link className="button button-outline" href="/first">初めての方へ</Link>
            </div>
          </div>
          <div className="hero-visual">
            <Image src="/images/yasashisa/clinic-hero-generated.webp" alt="青と白を基調とした明るく清潔な院内" fill priority sizes="(max-width: 800px) 100vw, 58vw" />
            <div className="hero-photo-note"><strong>明るく広い院内</strong><span>施術ベッド10台・駐車場5台</span></div>
          </div>
        </div>
      </section>

      <section className="clinic-facts" aria-label="医院の特徴">
        <div className="container facts-grid">
          <article><span className="fact-icon" aria-hidden="true">●</span><div><small>最寄り駅</small><strong>徒歩4分</strong><p>東中神駅南口</p></div></article>
          <article><span className="fact-icon" aria-hidden="true">◷</span><div><small>診療時間</small><strong>20時まで</strong><p>9:00〜12:30／15:00〜20:00</p></div></article>
          <article><span className="fact-icon" aria-hidden="true">✓</span><div><small>ご予約</small><strong>当日予約</strong><p>空き状況をご確認ください</p></div></article>
          <article><span className="fact-icon" aria-hidden="true">□</span><div><small>Web予約</small><strong>24時間受付</strong><p>スマートフォンから簡単</p></div></article>
        </div>
      </section>

      <section className="section quick-section">
        <div className="container">
          <SectionHeading eyebrow="メニュー案内" title="知りたい情報をすぐに見つけられます" align="center" />
          <div className="quick-grid">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="quick-card">
                <div className="quick-card-title"><span aria-hidden="true">{item.icon}</span><div><strong>{item.title}</strong><small>{item.text}</small></div><b aria-hidden="true">›</b></div>
                <div className="quick-card-image"><Image src={item.image} alt="" fill sizes="(max-width: 700px) 50vw, 33vw" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section concerns">
        <div className="container concern-panel">
          <SectionHeading eyebrow="身体のお悩み" title="こんなお悩みはありませんか？" lead="痛む場所だけにとらわれず、生活習慣や身体の使い方まで丁寧に確認します。" />
          <div className="concern-list">
            {concerns.map((item) => <div key={item}><span aria-hidden="true">✓</span><strong>{item}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section pale">
        <div className="container">
          <SectionHeading eyebrow="当院が大切にしていること" title="初めてでも安心できる、丁寧な施術" lead="同じように見える不調でも、原因や生活背景は人それぞれ。分かりやすい説明と、無理のない施術を大切にしています。" align="center" />
          <div className="feature-grid">
            <article><b>01</b><h3>丁寧にお話を伺う</h3><p>不調の経緯や日常の過ごし方まで、焦らずお聞きします。</p></article>
            <article><b>02</b><h3>状態を分かりやすく説明</h3><p>身体の状態と施術の考え方を、納得できる言葉でお伝えします。</p></article>
            <article><b>03</b><h3>続けやすい環境</h3><p>駅徒歩4分、駐車場5台。明るく広い院内でお迎えします。</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="施術・メニュー" title="身体の状態に合わせてご提案します" lead="お悩みや身体の状態に合わせて、必要な施術をご提案します。" />
          <div className="treatment-grid">
            {treatments.map((item) => (
              <article key={item.title}>
                <div className="card-image"><Image src={item.image} alt={`${item.title}の施術イメージ`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div>
                <div className="card-body"><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
          <Link className="button button-outline section-link" href="/treatment">施術・メニューを詳しく見る</Link>
        </div>
      </section>

      <section className="section gallery-preview">
        <div className="container">
          <SectionHeading eyebrow="院内紹介" title="明るく、清潔で、安心できる院内" lead="施術ベッド10台を備えた広い空間と、カーテンで仕切れる施術スペースをご用意しています。" />
          <div className="gallery-strip">{gallery.slice(0, 4).map((item, i) => <Image key={item.src} className={i === 0 ? "wide" : ""} src={item.src} alt={item.alt} width={700} height={520} />)}</div>
          <Link className="button button-outline section-link" href="/gallery">院内紹介を見る</Link>
        </div>
      </section>

      <InstagramSection />

      <section className="section access-home">
        <div className="container access-grid">
          <div>
            <SectionHeading eyebrow="アクセス" title="東中神駅南口から徒歩4分" lead="駅から近く、院の斜向かいには5台分の駐車場もあります。お仕事帰りやお子さま連れでも通いやすい環境です。" />
            <div className="access-summary"><p><strong>所在地</strong>{siteConfig.address}</p><p><strong>診療時間</strong>9:00〜12:30／15:00〜20:00</p><p><strong>定休日</strong>年末年始</p></div>
            <div className="inline-actions"><Link className="button" href="/access">アクセス詳細</Link><a className="button button-outline" href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">Googleマップ ↗</a></div>
          </div>
          <Image src="/images/yasashisa/clinic-original.jpg" alt="やさしさ 昭島東中神整骨院の院内" width={720} height={540} />
        </div>
      </section>

      <section className="section pale">
        <div className="container">
          <SectionHeading eyebrow="よくある質問" title="初めての方の疑問にお答えします" />
          <div className="faq-list">{faqs.slice(0, 3).map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div>
          <Link className="button button-outline section-link" href="/faq">よくある質問をもっと見る</Link>
        </div>
      </section>

      <section className="section recruit-home">
        <div className="container recruit-panel">
          <div><p className="eyebrow">採用情報</p><h2>一緒に働く仲間を募集しています</h2><p className="recruit-copy">好きで溢れる世界を、仲間とつくる。</p><p>株式会社フチでは、経験や年齢だけではなく「この人と一緒に働きたいと思えるか」を大切にしています。</p></div>
          <div><ul>{recruitData.highlights.map((item) => <li key={item}>{item}</li>)}</ul><Link className="button button-white" href="/recruit">採用情報を見る</Link></div>
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}

