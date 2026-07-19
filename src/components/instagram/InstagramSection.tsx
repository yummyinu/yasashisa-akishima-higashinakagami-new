import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getInstagramPosts } from "@/lib/getInstagramPosts";
import { SectionHeading } from "@/components/UI";
import { InstagramFallback } from "./InstagramFallback";
import { InstagramGrid } from "./InstagramGrid";
export async function InstagramSection() { const posts = await getInstagramPosts(); return <section id="instagram" className="section instagram-section"><div className="container"><SectionHeading eyebrow="INSTAGRAM" title="院の日常や最新情報を発信しています" lead="施術の様子、院内のお知らせ、スタッフの日常などをInstagramで発信しています。初めて来院される方も、院内の雰囲気をご覧ください。" /><div className="instagram-profile"><Image src="/brand/instagram/instagram-glyph-black.svg" alt="" width={30} height={30} /><strong>@{siteConfig.instagram.username}</strong><a href={siteConfig.instagram.profileUrl} target="_blank" rel="noopener noreferrer">フォローする ↗</a></div>{posts.length ? <><InstagramGrid posts={posts} /><a className="button button-outline instagram-more" href={siteConfig.instagram.profileUrl} target="_blank" rel="noopener noreferrer">Instagramをもっと見る ↗</a></> : <InstagramFallback />}</div></section>; }
