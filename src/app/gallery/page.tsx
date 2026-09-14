import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Breadcrumb, ReservationCTA } from "@/components/UI";
import { Ja } from "@/components/Ja";

export const metadata: Metadata = {
  title: "院内紹介",
  description: "青と白を基調とした、明るく清潔なやさしさ 昭島東中神整骨院の院内の様子をご紹介します。",
  alternates: { canonical: "/gallery" },
};

const photos = [
  { src: "/images/yasashisa/clinic-original.jpg", alt: "施術ベッドが並ぶ明るい院内", wide: true },
  { src: "/images/yasashisa/kids-space.jpg", alt: "院内のキッズスペース" },
  { src: "/images/yasashisa/counseling.jpg", alt: "問診の様子" },
  { src: "/images/yasashisa/neck-treatment.jpg", alt: "首まわりの施術の様子" },
  { src: "/images/yasashisa/back-treatment.jpg", alt: "背中の施術の様子" },
  { src: "/images/yasashisa/back-treatment-2.jpg", alt: "施術ベッドでの施術の様子" },
  { src: "/images/yasashisa/pelvis-treatment.jpg", alt: "姿勢を確認しながらの施術の様子" },
  { src: "/images/yasashisa/stretch-treatment.jpg", alt: "脚のストレッチ施術の様子" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="院内紹介" title="院内紹介" lead="青と白を基調とした、広く明るい院内です。初めての方にも落ち着いて過ごしていただける空間を整えています。" />
      <Breadcrumb current="院内紹介" path="/gallery" />
      <section className="section">
        <div className="container gallery-wall">
          {photos.map((p) => (
            <figure key={p.src} className={p.wide ? "wide" : ""}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 760px) 50vw, 33vw" />
              <figcaption><Ja>{p.alt}</Ja></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <ReservationCTA />
    </>
  );
}
