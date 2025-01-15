import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '@/site-config'

export async function GET(context: any) {
	const tours = await getCollection('tours')
	return rss({
		title: siteConfig.title,
		description: siteConfig.description,
		site: context.site,
		items: tours.map((tour) => ({
			...tour.data,
			link: `tour/${tour.slug}/`
		}))
	})
}
