import type { Metadata } from "next";
import { Breadcrumb, PageHero } from "@/components/UI";
export const metadata: Metadata = { title: "お知らせ", description: "やさしさ 昭島東中神整骨院からのお知らせです。" };
export default function NewsPage() { return <><PageHero eyebrow="NEWS" title="お知らせ" lead="診療日の変更や院からのご案内をお知らせします。" /><Breadcrumb current="お知らせ" /><section className="section"><div className="container empty-state"><p className="eyebrow">LATEST INFORMATION</p><h2>現在、新しいお知らせはありません</h2><p>最新情報はInstagramでも発信しています。</p><a className="button button-outline" href="https://www.instagram.com/akishimazhengtiyuan/" target="_blank" rel="noopener noreferrer">Instagramを見る ↗</a></div></section></>; }
