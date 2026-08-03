"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MapPinIcon, SmartphoneIcon } from "@/components/Icons";

export function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/recruit") return null;
  return (
    <div className="mobile-cta" aria-label="固定ナビゲーション">
      <Link href="/access"><MapPinIcon />アクセス</Link>
      <a href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer" aria-label="Web予約を開く（外部サイト）"><SmartphoneIcon />Web予約</a>
    </div>
  );
}
