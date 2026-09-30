/*
 * サイト設定 — テーマ利用者が最初に編集するファイル。
 * ここを書き換えるだけでメタ情報・OGP・RSS・フッターの表記が切り替わる。
 * テーマ内部（src/components 以下）はこの値を参照するだけで、ハードコードしない。
 */
export const site = {
  name: 'Laël Troullier',
  author: 'Laël Troullier',
  postsPerPage: 6,
  title: 'Laël Troullier — Ingénieur Génie Électrique & Systèmes Embarqués',
  titleTemplate: '%s | Laël Troullier',
  description: 'Portfolio de projets et expériences en systèmes embarqués, IoT et génie électrique.',
  url: 'https://portfolio-troullier-lael.vercel.app/', // ton URL finale
  locale: 'fr_FR',
  defaultOgImage: '/og-image.png', // une image dans ton dossier public/
  social: {
    // Laisse vide si non utilisé au lieu de tout effacer
    twitter: '',
    github: 'https://github.com/ltroullier01',
    linkedin: 'https://www.linkedin.com/in/la%C3%ABl-troullier-644a87257',
  },
};

export type SiteConfig = typeof site;
