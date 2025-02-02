import { CATEGORIES } from '@/data/categories'
import { getCollection, getEntry, type CollectionEntry } from 'astro:content'
import type { Tour } from 'tina/__generated__/types'

export const getTours = async (max?: number) => {
	const tours: CollectionEntry<'tours'>[] = await getCollection('tours')
	return tours
		.filter((tour: CollectionEntry<'tours'>) => !tour.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export const getCategories = async () => {
	const tours: CollectionEntry<'tours'>[] = await getCollection('tours')
	const categories = new Set(
		tours.filter((tour) => !tour.data.draft).map((tour) => tour.data.category)
	)
	return Array.from(categories).sort((a, b) =>
		CATEGORIES.indexOf(a) < CATEGORIES.indexOf(b) ? -1 : 1
	)
}

export const getTourByCountry = async (country: string) => {
	const tours = await getTours()
	const lowercaseCountry = country.toLowerCase()
	return tours
		.filter((tour) => !tour.data.draft)
		.filter((tour) => {
			return tour.data.country.slug.toLowerCase() == lowercaseCountry
		})
}

export const filterToursByCategory = async (category: string) => {
	const tours = await getTours()
	return tours
		.filter((tour) => !tour.data.draft)
		.filter((tour) => tour.data.category.toLowerCase() === category)
}

export const getFeaturedTours = async () => {
	const tours = await getTours()
	return await tours.filter((tour) => !tour.data.draft).filter((tour) => tour.data.featured)
}
