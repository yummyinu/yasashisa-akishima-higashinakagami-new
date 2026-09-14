import type { Metadata } from "next";
import { PageHero, Breadcrumb, ReservationCTA } from "@/components/UI";
import { Ja } from "@/components/Ja";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "アクセス",
  description: "やさしさ 昭島東中神整骨院へのアクセス。東中神駅南口から徒歩4分、駐車場5台完備です。",
  alternates: { canonical: "/access" },
};

export default function AccessPage() {
  return (
    <>
      <PageHero eyebrow="アクセス" title="アクセス" lead="東中神駅南口から徒歩4分。お車でお越しの際は、院の斜向かいの駐車場をご利用ください。" />
      <Breadcrumb current="アクセス" path="/access" />
      <section className="section">
        <div className="container">
          <dl className="data-list">
            <div><dt>所在地</dt><dd><Ja>{siteConfig.address}</Ja></dd></div>
            <div><dt>最寄駅</dt><dd>JR青梅線 東中神駅 南口より徒歩4分</dd></div>
            <div><dt>駐車場</dt><dd>院の斜向かいに5台分ご用意しています</dd></div>
            <div><dt>電話番号</dt><dd><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></dd></div>
            <div><dt>診療時間</dt><dd>9:00〜12:30／15:00〜20:00</dd></div>
            <div><dt>定休日</dt><dd>年末年始</dd></div>
          </dl>
          <div className="map-frame">
            <iframe title="やさしさ 昭島東中神整骨院の地図" src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}
