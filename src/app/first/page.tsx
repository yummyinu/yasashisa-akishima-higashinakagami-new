import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Breadcrumb, ReservationCTA, SectionHeading } from "@/components/UI";
import { Ja } from "@/components/Ja";

export const metadata: Metadata = {
  title: "初めての方へ",
  description: "やさしさ 昭島東中神整骨院への初めてのご来院で気になる、流れ・服装・持ち物についてご案内します。",
  alternates: { canonical: "/first" },
};

const flow = [
  { t: "受付・問診票のご記入", d: "簡単な問診票にご記入いただき、気になる症状や生活習慣を伺います。" },
  { t: "お話を伺いながら確認", d: "痛みの経緯や日常での困りごとを、焦らず時間をかけてお聞きします。" },
  { t: "身体の状態と動きを確認", d: "姿勢や動きの制限を確認し、原因になっていそうな部分を探ります。" },
  { t: "施術方針のご説明", d: "確認した内容をもとに、これから行う施術の考え方をお伝えします。" },
  { t: "施術・今後のご案内", d: "施術後は今の状態と、通院の目安についてわかりやすくご説明します。" },
];

export default function FirstPage() {
  return (
    <>
      <PageHero eyebrow="はじめての方へ" title="はじめての方へ" lead="初めてのご来院でも安心していただけるよう、お話を伺う時間と分かりやすい説明を大切にしています。" />
      <Breadcrumb current="初めての方へ" path="/first" />
      <section className="section">
        <div className="container intro-split">
          <Image src="/images/yasashisa/counseling.jpg" alt="スタッフがお身体の状態を丁寧に伺う様子" width={700} height={520} />
          <div>
            <p className="tag">ご来院にあたって</p>
            <h2><Ja>まずはお話を伺うことから始めます</Ja></h2>
            <p><Ja>「何を伝えたらいいか分からない」という方もご安心ください。スタッフが質問しながら、お悩みの状態や生活での困りごとを整理します。</Ja></p>
            <p><Ja>施術内容を一方的に決めることはありません。状態を共有し、納得いただいてから進めます。</Ja></p>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <SectionHeading eyebrow="ご来院の流れ" title="来院から施術までの5つのステップ" />
          <ol className="flow-list">
            {flow.map((s) => <li key={s.t}><div><h3><Ja>{s.t}</Ja></h3><p><Ja>{s.d}</Ja></p></div></li>)}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container note-grid">
          <article><h2><Ja>服装について</Ja></h2><p><Ja>身体を動かしやすい服装がおすすめです。お着替えもご用意しています。</Ja></p></article>
          <article><h2><Ja>お持ちいただくもの</Ja></h2><p><Ja>保険施術をご希望の場合は、マイナ保険証など資格確認ができるものをお持ちください。</Ja></p></article>
          <article><h2><Ja>お子さま連れの方へ</Ja></h2><p><Ja>キッズスペースがあります。気になることは予約時にご相談ください。</Ja></p></article>
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}
