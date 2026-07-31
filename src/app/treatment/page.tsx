import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, PageHero, ReservationCTA, SectionHeading } from "@/components/UI";
import { treatments } from "@/data/site";
export const metadata: Metadata = { title: "施術・メニュー", description: "整体、骨盤・姿勢矯正、首・肩・腰のお悩みなど、施術内容をご案内します。", alternates: { canonical: "/treatment" } };
const menuDetails = [
  ["身体全体のつらさやバランスが気になる方", "姿勢や動き、つらさが出る場面を確認します", "身体全体の状態を見ながら無理のない施術をご提案します"],
  ["骨盤まわりや日常姿勢が気になる方", "普段の姿勢や身体の使い方を確認します", "一人ひとりの状態に合わせて進めます"],
  ["首・肩・腰など特定の部位がつらい方", "つらさの経緯と動かしたときの状態を確認します", "刺激の感じ方を確かめながら施術します"],
] as const;
export default function TreatmentPage() { return <><PageHero eyebrow="施術のご案内" title="施術・メニュー" lead="痛みの場所だけでなく、身体全体の状態や日常の動き方まで確認して施術をご提案します。" /><Breadcrumb current="施術・メニュー" path="/treatment" /><section className="section"><div className="container"><SectionHeading eyebrow="施術メニュー" title="状態に合わせた施術" /><div className="menu-list">{treatments.map((item, i) => <article key={item.title}><Image src={item.image} alt={`${item.title}の施術イメージ`} width={700} height={520} /><div><span>0{i + 1}</span><h2>{item.title}</h2><p>{item.text}</p><dl className="menu-details"><div><dt>主なお悩み</dt><dd>{menuDetails[i][0]}</dd></div><div><dt>施術前の確認</dt><dd>{menuDetails[i][1]}</dd></div><div><dt>施術の考え方</dt><dd>{menuDetails[i][2]}</dd></div></dl></div></article>)}</div><p className="note menu-price-note">メニューや料金は、ご予約ページの最新情報をご確認ください。</p></div></section><section className="section pale"><div className="container"><SectionHeading eyebrow="保険施術" title="保険施術について" lead="健康保険の取扱いは、症状や受傷原因などによって異なります。詳しくは来院時または予約時にご確認ください。" /><p className="note">施術内容・料金は、お身体の状態や保険適用の有無によって異なります。来院時に事前にご説明します。</p></div></section><ReservationCTA /></>; }
