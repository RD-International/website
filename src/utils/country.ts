import { getCollection, type CollectionEntry } from 'astro:content'
import { getTours, getTourByCountry } from './tours'

export const getCountries = async (max?: number) => {
	return (await getCollection('countries')).slice(0, max)
}

export const getCities = async (max?: number) => {
	return (await getCollection('tours'))
		.map((tour: CollectionEntry<'tours'>) => tour.data.city)
		.slice(0, max)
}

export const getCitiesByCountry = async (country: string) => {
	const lowercaseCountry = country.toLowerCase()
	const tours = await getTourByCountry(lowercaseCountry)
	const cities = tours
		.filter((tour) => {
			return tour.data.country.slug.toLowerCase() === lowercaseCountry
		})
		.map((tour) => tour.data.city)
	return [...new Set(cities)]
}
