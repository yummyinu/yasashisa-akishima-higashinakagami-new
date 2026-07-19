# やさしさ 昭島東中神整骨院 公式Webサイト

東京都昭島市玉川町3-18-13「やさしさ 昭島東中神整骨院」の公式サイトです。Next.js App Router、TypeScript、Tailwind CSSで構築し、Vercelへの独立デプロイを前提にしています。

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:3000` を開いて確認してください。

## Instagram投稿の自動取得

`.env.example` を `.env.local` としてコピーし、Metaで取得した値を設定します。アクセストークンはサーバーコンポーネントだけで参照し、ブラウザへは公開しません。

```env
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_USER_ID=
```

`src/lib/getInstagramPosts.ts` がInstagram APIをサーバー側で呼び出し、3時間キャッシュします。API取得に失敗してもセクションは消えず、microCMS、ローカルデータ、プロフィール案内の順に切り替わります。

## microCMSでInstagram投稿を手動管理

microCMSに `instagram-posts` APIを作成し、`title`、`postUrl`、`image`、`caption`、`publishedAt`、`mediaType`、`isPinned`、`order`、`isPublished` の各フィールドを用意します。`mediaType` は `IMAGE`、`VIDEO`、`CAROUSEL_ALBUM`、`REEL` のいずれかです。

環境変数に `MICROCMS_SERVICE_DOMAIN` と `MICROCMS_API_KEY` を設定してください。固定投稿は新しい投稿より先に表示されます。microCMSを使わない場合は設定不要で、ビルドに影響しません。

ローカルで手動登録する場合は `src/data/instagram-posts.ts` に実在する投稿URLと画像だけを追加します。投稿が未確認の写真をInstagram投稿として登録しないでください。

## 主な設定

- 院情報・予約URL・Instagram：`src/config/site.ts`
- 採用条件：`src/data/recruit.ts`
- Instagramフォールバック：`src/data/instagram-posts.ts`
- 生成ヒーロー画像：`public/images/yasashisa/clinic-hero-generated.webp`

予約リンクには、院名と住所が一致するHot Pepper Beauty公式掲載ページを設定しています。電話番号と採用応募先は未提供のため、架空情報を掲載していません。

## 品質確認

```bash
npm run lint
npx tsc --noEmit
npm run build
```

レスポンシブ検査は320、360、375、390、430、768、1024、1280、1440、1920pxで全公開ページを確認します。

## 公開先

- Vercelプロジェクト：`yasashisa-akishima-higashinakagami-new`
- 本番URL：`https://yasashisa-akishima-higashinakagami-eosin.vercel.app`
