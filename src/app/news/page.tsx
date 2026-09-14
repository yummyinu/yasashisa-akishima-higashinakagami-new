import type { Metadata } from "next";
import { PageHero, Breadcrumb } from "@/components/UI";
import { Ja } from "@/components/Ja";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "やさしさ 昭島東中神整骨院からのお知らせ一覧です。",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="お知らせ" title="お知らせ" lead="休診日や院内からのお知らせをこちらに掲載します。" />
      <Breadcrumb current="お知らせ" path="/news" />
      <section className="section">
        <div className="container">
          <div className="empty-box">
            <h2><Ja>現在お知らせはありません</Ja></h2>
            <p><Ja>新しいお知らせがあり次第、こちらのページに掲載します。</Ja></p>
          </div>
        </div>
      </section>
    </>
  );
}
