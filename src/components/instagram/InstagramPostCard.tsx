import Image from "next/image";
import type { InstagramPost } from "@/lib/getInstagramPosts";
export function InstagramPostCard({ post }: { post: InstagramPost }) {
  const image = post.thumbnailUrl || post.mediaUrl;
  return <a className="instagram-card" href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label="やさしさ 昭島東中神整骨院のInstagram投稿を開く（外部サイト）">
    <div className="instagram-image">{image ? <Image src={image} alt={post.caption ? post.caption.slice(0, 80) : "やさしさ 昭島東中神整骨院のInstagram投稿"} fill sizes="(max-width: 700px) 50vw, 33vw" /> : <div className="instagram-placeholder">Instagram</div>}<span className="media-badge">{post.mediaType === "CAROUSEL_ALBUM" ? "▱" : post.mediaType === "VIDEO" || post.mediaType === "REEL" ? "▶" : "◎"}</span><div className="instagram-hover"><span>◎</span><span>投稿を見る ↗</span></div></div>
    <p>{post.caption || "院の日常や最新情報をお届けしています。"}</p><time dateTime={post.timestamp}>{post.timestamp ? new Intl.DateTimeFormat("ja-JP").format(new Date(post.timestamp)) : ""}</time>
  </a>;
}
