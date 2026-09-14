import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Breadcrumb, ReservationCTA } from "@/components/UI";
import { Ja } from "@/components/Ja";
import { treatments } from "@/data/site";

export const metadata: Metadata = {
  title: "施術・メニュー",
  description: "全身整体・骨盤矯正・首肩腰の施術など、症状やお悩みに合わせた施術メニューをご紹介します。",
  alternates: { canonical: "/treatment" },
};

export default function TreatmentPage() {
  return (
    <>
      <PageHero eyebrow="施術・メニュー" title="施術・メニュー" lead="症状や身体の状態を確認したうえで、必要な施術を組み合わせてご提案します。" />
      <Breadcrumb current="施術・メニュー" path="/treatment" />
      <section className="section">
        <div className="container menu-detail">
          {treatments.map((item) => (
            <article key={item.title}>
              <div className="photo"><Image src={item.image} alt={`${item.title}の施術イメージ`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
              <div>
                <h2><Ja>{item.title}</Ja></h2>
                <p><Ja>{item.text}</Ja></p>
                <ul className="points">{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <div className="callout">
            <p><Ja>施術内容や回数の目安は、来院時の状態確認をもとにご提案します。ご不明な点はご予約時やご来院の際にお気軽にご相談ください。</Ja></p>
          </div>
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}
