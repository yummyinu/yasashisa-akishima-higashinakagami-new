"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      } else if (event.key === "Tab") {
        const links = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
        if (!links.length) return;
        const first = links[0];
        const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-notice">
        <ul className="header-notice-inner" aria-label="医院情報">
          <li>東中神駅南口から徒歩4分</li>
          <li>受付 9:00〜12:30／15:00〜20:00</li>
          <li>駐車場5台</li>
        </ul>
      </div>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="やさしさ 昭島東中神整骨院 トップページ" onClick={closeMenu}>
          <Image src="/images/yasashisa/yasashisa-wordmark-hd.png" alt="やさしさ 昭島東中神整骨院" width={2178} height={722} priority />
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-reserve" href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">
          <span>24時間受付</span>
          Web予約
        </a>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          <span />
          <span />
          <span />
          <small>メニュー</small>
        </button>
      </div>
      {open && <button className="menu-backdrop" type="button" aria-label="メニューを閉じる" onClick={closeMenu} />}
      <nav ref={menuRef} id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="スマートフォンメニュー" aria-hidden={!open}>
        <Link href="/" onClick={closeMenu}>トップページ</Link>
        {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeMenu}>{item.label}</Link>)}
        <a href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約（外部サイト）</a>
      </nav>
    </header>
  );
}
