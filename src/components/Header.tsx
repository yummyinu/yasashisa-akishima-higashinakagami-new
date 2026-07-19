"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="やさしさ 昭島東中神整骨院 トップページ">
          <Image src="/images/yasashisa/yasashisa-wordmark.jpg" alt="やさしさ 昭島東中神整骨院" width={454} height={124} priority />
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <a className="button button-small desktop-reserve" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約</a>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="メニューを開閉する"><span /><span /></button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="スマートフォンメニュー">
        <Link href="/" onClick={() => setOpen(false)}>トップページ</Link>
        {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <a href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約（外部サイト）</a>
      </nav>
    </header>
  );
}
