import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import { Ja } from "@/components/Ja";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-clinic">
          <div className="footer-logo-wrap">
            <Image className="footer-logo" src="/images/yasashisa/yasashisa-whale-logo.jpg" alt="" width={120} height={120} />
            <span className="footer-brand-name">やさしさ 昭島東中神整骨院</span>
          </div>
          <p><Ja>{siteConfig.address}</Ja></p>
          <p><strong>東中神駅南口から徒歩4分</strong>／<Ja>駐車場5台</Ja></p>
          <p><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></p>
          <a className="button button-reserve" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約する ↗</a>
        </div>
        <div>
          <p className="footer-label">診療時間</p>
          <dl className="footer-hours">
            <div><dt>午前</dt><dd>9:00〜12:30</dd></div>
            <div><dt>午後</dt><dd>15:00〜20:00</dd></div>
            <div><dt>定休日</dt><dd>年末年始</dd></div>
          </dl>
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

