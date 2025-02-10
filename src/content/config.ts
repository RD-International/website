import { defineCollection, reference, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'
import { file, glob } from 'astro/loaders'

const countries = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			name: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			coverImage: image()
		})
})

const tours = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			heroImage: image(),
			category: z.enum(CATEGORIES),
			draft: z.boolean().default(false),
			price: z.number(),
			minPeopleCount: z.number(),
			duration: z.string(),
			country: reference('countries'),
			city: z.string(),
			featured: z.boolean().default(false)
		})
})

export const collections = { tours, countries }
