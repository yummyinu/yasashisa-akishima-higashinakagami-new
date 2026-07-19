export const siteConfig = {
  name: "やさしさ 昭島東中神整骨院",
  shortName: "やさしさ昭島東中神整骨院",
  company: "株式会社フチ",
  description: "昭島市・東中神駅南口から徒歩4分。身体の悩みにやさしく向き合う整骨院です。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yasashisa-akishima-higashinakagami-eosin.vercel.app",
  address: "〒196-0034 東京都昭島市玉川町3-18-13",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%84%E3%81%95%E3%81%97%E3%81%95%E6%98%AD%E5%B3%B6%E6%9D%B1%E4%B8%AD%E7%A5%9E%E6%95%B4%E9%AA%A8%E9%99%A2",
  reservationUrl: "https://beauty.hotpepper.jp/kr/slnH000749527/",
  instagram: {
    username: "akishimazhengtiyuan",
    profileUrl: "https://www.instagram.com/akishimazhengtiyuan/",
  },
  recruit: { applicationUrl: "", contactUrl: "", tourApplicationUrl: "" },
} as const;

export const navigation = [
  { href: "/first", label: "初めての方へ" },
  { href: "/treatment", label: "施術・メニュー" },
  { href: "/gallery", label: "院内紹介" },
  { href: "/access", label: "アクセス" },
  { href: "/faq", label: "よくある質問" },
  { href: "/recruit", label: "採用情報" },
] as const;
