import { getCollection, type CollectionEntry } from 'astro:content'
import { getTours } from './tours'

export const getCountries = async (max?: number) => {
	return (await getCollection('countries')).slice(0, max)
}

export const getCities = async (max?: number) => {
	return (await getCollection('countries'))
		.map((country: CollectionEntry<Country>) => country.cities)
		.slice(0, max)
}

export const getCitiesByCountry = async (country: string) => {
	const tours = await getTours()
	const lowercaseCountry = country.toLowerCase()
	return tours
		.filter((tour) => !tour.data.draft)
		.filter((tour) => {
			return tour.data.country.toLowerCase() === lowercaseCountry
		})
		.map((tour) => tour.data.city)
}
