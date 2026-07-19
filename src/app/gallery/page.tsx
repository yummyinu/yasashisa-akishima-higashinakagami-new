import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb, PageHero, ReservationCTA } from "@/components/UI";
import { gallery } from "@/data/site";
export const metadata: Metadata = { title: "院内紹介", description: "明るく清潔な院内、施術スペース、キッズスペースをご紹介します。" };
export default function GalleryPage() { return <><PageHero eyebrow="CLINIC GALLERY" title="院内紹介" lead="青と白を基調とした、広く明るい院内です。初めての方にも落ち着いて過ごしていただける空間を整えています。" /><Breadcrumb current="院内紹介" /><section className="section"><div className="container gallery-page">{gallery.map((item, i) => <figure key={item.src} className={i === 0 || i === 3 ? "gallery-large" : ""}><Image src={item.src} alt={item.alt} width={900} height={675} /><figcaption>{item.alt}</figcaption></figure>)}</div></section><section className="section pale"><div className="container info-grid"><article><h2>施術ベッド10台</h2><p>広さにゆとりのある院内で、落ち着いて施術を受けていただけます。</p></article><article><h2>カーテンで仕切れる空間</h2><p>周囲が気になる方にも配慮し、施術スペースを仕切れるようにしています。</p></article><article><h2>キッズスペース</h2><p>お子さま連れの方も来院しやすい環境をご用意しています。</p></article></div></section><ReservationCTA /></>; }
