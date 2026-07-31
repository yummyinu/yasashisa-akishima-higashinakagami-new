import type { Metadata } from "next";
import { Breadcrumb, PageHero } from "@/components/UI";
export const metadata: Metadata = { title: "お知らせ", description: "やさしさ 昭島東中神整骨院からのお知らせです。", alternates: { canonical: "/news" } };
export default function NewsPage() { return <><PageHero eyebrow="医院からのご案内" title="お知らせ" lead="診療日の変更や院からのご案内をお知らせします。" /><Breadcrumb current="お知らせ" path="/news" /><section className="section"><div className="container empty-state"><p className="eyebrow">最新情報</p><h2>現在、お知らせはありません</h2><p>最新情報はInstagramでも発信しています。</p><a className="button button-outline" href="https://www.instagram.com/akishimazhengtiyuan/" target="_blank" rel="noopener noreferrer" aria-label="Instagramを見る（外部サイト）">Instagramを見る <span aria-hidden="true">↗</span></a></div></section></>; }
