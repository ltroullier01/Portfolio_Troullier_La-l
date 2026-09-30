import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
 * Projets collection. Frontmatter is validated against this schema.
 * Add Markdown/MDX content under src/content/projets/.
 */
const projets = defineCollection({
	loader: glob({ base: './src/content/projets', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z.array(z.string()).default([]),
			author: z.string().optional(),
			/** true の記事は本番ビルドで一覧・詳細から除外される */
			draft: z.boolean().default(false),
			/** Optional hero image, relative to src/content/projets. */
			heroImage: image().optional(),
		}),
});

/*
 * Experiences collection. Content bodies are case studies.
 * Add Markdown/MDX content under src/content/experiences/.
 */
const experiences = defineCollection({
	loader: glob({ base: './src/content/experiences', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			/** フィルタに使う主カテゴリ */
			category: z.string().optional(),
			/** 使用技術・スタック */
			tech: z.array(z.string()).default([]),
			year: z.number(),
			role: z.string().optional(),
			client: z.string().optional(),
			/** 公開サイト・リポジトリ（任意） */
			url: z.string().url().optional(),
			repo: z.string().url().optional(), 
			/** サムネイル（任意）。無い場合はグラデーションのプレースホルダを表示 */
			thumbnail: z.string().optional(),
			featured: z.boolean().default(false),
			/** 並び順（小さいほど前）。同値は year の新しい順 */
			order: z.number().default(0),
			draft: z.boolean().default(false),
		}),
});

export const collections = { projets, experiences };
