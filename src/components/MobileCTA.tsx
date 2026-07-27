import { siteConfig } from "@/config/site";

export function MobileCTA() {
  return (
    <div className="mobile-cta" aria-label="固定ナビゲーション">
      <a href="/access"><span aria-hidden="true">●</span>アクセス</a>
      <a href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">□</span>Web予約</a>
    </div>
  );
}
