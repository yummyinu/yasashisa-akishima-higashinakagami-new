import { siteConfig } from "@/config/site";
export function MobileCTA() { return <div className="mobile-cta"><a href={siteConfig.reservationUrl} target="_blank" rel="noopener noreferrer">Web予約する</a><a href="/access">アクセスを見る</a></div>; }
