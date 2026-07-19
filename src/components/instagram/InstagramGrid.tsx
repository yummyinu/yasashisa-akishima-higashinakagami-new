import type { InstagramPost } from "@/lib/getInstagramPosts";
import { InstagramPostCard } from "./InstagramPostCard";
export function InstagramGrid({ posts }: { posts: InstagramPost[] }) { return <div className="instagram-grid">{posts.slice(0, 6).map((post) => <InstagramPostCard key={post.id} post={post} />)}</div>; }
