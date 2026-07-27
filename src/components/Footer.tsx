import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-clinic">
          <div className="footer-logo-wrap">
            <Image className="footer-logo" src="/images/yasashisa/yasashisa-wordmark-hd.png" alt="やさしさ 昭島東中神整骨院" width={2178} height={722} />
          </div>
          <p>{siteConfig.address}</p>
          <p><strong>東中神駅南口から徒歩4分</strong>／駐車場5台</p>
          <a className="button button-reserve" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約する ↗</a>
        </div>
        <div>
          <p className="footer-label">診療時間</p>
          <div className="footer-hours">
            <p><span>午前</span>9:00〜12:30</p>
            <p><span>午後</span>15:00〜20:00</p>
            <p><span>定休日</span>年末年始</p>
          </div>
        </div>
        <nav aria-label="フッターナビゲーション">
          <Link href="/">トップページ</Link>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/news">お知らせ</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <a href={siteConfig.instagram.profileUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        </nav>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {siteConfig.name}</p>
    </footer>
  );
}

