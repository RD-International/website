import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'
import { siteConfig } from './src/data/site.config'
import node from '@astrojs/node'
import clerk from '@clerk/astro'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
	site: siteConfig.site,
	base: '',

	redirects: {},
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},

	adapter: node({ mode: 'standalone' }),
	integrations: [
		clerk(),
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				experimentalThemes: {
					light: 'vitesse-light',
				},
				wrap: true
			},
			drafts: true
		}),
		sitemap(),
		tailwind(),
		react()
	]
})
