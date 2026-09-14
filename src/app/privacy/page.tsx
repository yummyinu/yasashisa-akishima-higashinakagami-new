import type { Metadata } from "next";
import { PageHero, Breadcrumb } from "@/components/UI";
import { Ja } from "@/components/Ja";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "やさしさ 昭島東中神整骨院における個人情報の取り扱いについてご案内します。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="プライバシーポリシー" title="プライバシーポリシー" lead="ご来院・お問い合わせに際してお預かりする個人情報の取り扱いについて定めます。" />
      <Breadcrumb current="プライバシーポリシー" path="/privacy" />
      <section className="section">
        <div className="container">
          <div className="legal-box">
            <h2><Ja>個人情報の利用目的</Ja></h2>
            <p><Ja>ご予約・ご来院時にお預かりする個人情報は、施術のご提供、ご連絡、料金のお支払いに関する対応のために利用します。</Ja></p>
            <h2><Ja>個人情報の第三者提供</Ja></h2>
            <p><Ja>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。</Ja></p>
            <h2><Ja>個人情報の管理</Ja></h2>
            <p><Ja>お預かりした個人情報は、紛失・漏えい・改ざんを防止するため、適切な安全管理措置を講じたうえで管理します。</Ja></p>
            <h2><Ja>お問い合わせ窓口</Ja></h2>
            <p><Ja>個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。</Ja><br />{siteConfig.company}　{siteConfig.name}　{siteConfig.phone}</p>
          </div>
        </div>
      </section>
    </>
  );
}
