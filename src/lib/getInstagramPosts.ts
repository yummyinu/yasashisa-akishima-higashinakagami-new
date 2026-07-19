import { localInstagramPosts } from "@/data/instagram-posts";

export type InstagramPost = { id: string; permalink: string; caption: string; timestamp: string; mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "REEL"; mediaUrl?: string; thumbnailUrl?: string; isPinned?: boolean; order?: number };

async function fromInstagram(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const id = process.env.INSTAGRAM_USER_ID;
  if (!token || !id) return [];
  const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
  const response = await fetch(`https://graph.instagram.com/${id}/media?fields=${fields}&limit=6&access_token=${token}`, { next: { revalidate: 10800 } });
  if (!response.ok) throw new Error("Instagram API request failed");
  const json = await response.json() as { data?: Array<Record<string, string>> };
  return (json.data || []).map((post) => ({ id: post.id, permalink: post.permalink, caption: post.caption || "", timestamp: post.timestamp, mediaType: post.media_type as InstagramPost["mediaType"], mediaUrl: post.media_url, thumbnailUrl: post.thumbnail_url }));
}

async function fromMicroCMS(): Promise<InstagramPost[]> {
  const domain = process.env.MICROCMS_SERVICE_DOMAIN;
  const key = process.env.MICROCMS_API_KEY;
  if (!domain || !key) return [];
  const response = await fetch(`https://${domain}.microcms.io/api/v1/instagram-posts?limit=6&filters=isPublished[equals]true`, { headers: { "X-MICROCMS-API-KEY": key }, next: { revalidate: 10800 } });
  if (!response.ok) throw new Error("microCMS request failed");
  const json = await response.json() as { contents?: Array<Record<string, unknown>> };
  return (json.contents || []).map((item) => ({ id: String(item.id), permalink: String(item.postUrl), caption: String(item.caption || item.title || ""), timestamp: String(item.publishedAt || ""), mediaType: String(item.mediaType || "IMAGE") as InstagramPost["mediaType"], mediaUrl: (item.image as { url?: string } | undefined)?.url, isPinned: Boolean(item.isPinned), order: Number(item.order || 0) })).sort((a, b) => Number(b.isPinned) - Number(a.isPinned) || (a.order || 0) - (b.order || 0));
}

export async function getInstagramPosts() {
  try { const posts = await fromInstagram(); if (posts.length) return posts; } catch (error) { console.error("Instagram feed unavailable", error); }
  try { const posts = await fromMicroCMS(); if (posts.length) return posts; } catch (error) { console.error("microCMS Instagram feed unavailable", error); }
  return localInstagramPosts;
}
