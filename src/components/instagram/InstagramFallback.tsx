import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Ja } from "@/components/Ja";
export function InstagramFallback() { return <div className="instagram-fallback"><Image src="/brand/instagram/instagram-glyph-black.svg" alt="" width={34} height={34} /><div><strong>@{siteConfig.instagram.username}</strong><p><Ja>最新の投稿はInstagramでご覧いただけます</Ja></p></div><a className="button button-outline" href={siteConfig.instagram.profileUrl} target="_blank" rel="noopener noreferrer">Instagramをもっと見る ↗</a></div>; }
