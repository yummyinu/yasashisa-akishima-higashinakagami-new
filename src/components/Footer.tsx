import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";

export function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div><Image className="footer-logo" src="/images/yasashisa/yasashisa-wordmark-hd.png" alt="やさしさ 昭島東中神整骨院" width={2178} height={722} /><p>{siteConfig.address}</p><p>東中神駅南口から徒歩4分</p></div>
      <nav aria-label="フッターナビゲーション">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/news">お知らせ</Link><Link href="/privacy">プライバシーポリシー</Link></nav>
      <div><p className="footer-label">診療時間</p><p>9:00〜12:30／15:00〜20:00</p><p>年末年始を除き営業</p><a className="text-link" href={siteConfig.instagram.profileUrl} target="_blank" rel="noopener noreferrer">Instagramを見る ↗</a></div>
    </div>
    <p className="copyright">© {new Date().getFullYear()} {siteConfig.name}</p>
  </footer>;
}
