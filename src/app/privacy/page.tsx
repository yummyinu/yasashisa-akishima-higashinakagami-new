import type { Metadata } from "next";
import { Breadcrumb, PageHero } from "@/components/UI";
export const metadata: Metadata = { title: "プライバシーポリシー" };
export default function PrivacyPage() { return <><PageHero eyebrow="PRIVACY POLICY" title="プライバシーポリシー" lead="当院における個人情報の取り扱いについてご案内します。" /><Breadcrumb current="プライバシーポリシー" /><section className="section"><div className="container legal"><h2>個人情報の取り扱い</h2><p>当院は、ご予約やお問い合わせ、施術に必要な範囲で取得した個人情報を適切に管理し、ご本人の同意なく目的外に利用しません。</p><h2>利用目的</h2><p>取得した情報は、ご予約の管理、施術の提供、必要なご連絡、サービス改善のために利用します。</p><h2>第三者への提供</h2><p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。</p><h2>安全管理</h2><p>個人情報への不正アクセス、紛失、漏えいを防ぐため、必要かつ適切な安全管理措置を講じます。</p><h2>見直し</h2><p>本方針は、法令や運用状況に応じて内容を見直すことがあります。</p></div></section></>; }
