interface SiteConfig {
	site: string
	base: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	company: {
		name: string
		shortName: string
		addresses: {
			firstLineAddress: string
			secondLineAddress: string
		}[]
		phoneNumbers: { whatsapp: boolean; booking: boolean; number: string }[]
		emails: string[]
		estabilished: number
		members: {
			name: string
			role: string
			image: string
		}[]
	}

	customerCount: number
	countryCount: number
	fiveStarReviews: number
	expensesSaved: number
}

export const siteConfig: SiteConfig = {
	site: 'https://rd-international.github.io/', // Write here your website url
	base: '/',
	author: 'Your Name', // Site author
	title: 'RD Intl. Travel Agency', // Site title.
	description: 'Muslim Travel Agency specialising in South East Asia', // Description to display in the meta countries
	company: {
		name: 'RD International',
		shortName: 'RD Intl.',
		addresses: [
			{
				firstLineAddress: 'SkyPark @ Cyberjaya, Jalan Teknokrat 1',
				secondLineAddress: 'Cyberjaya, Selangor, 63000'
			},

			{
				firstLineAddress: 'RD Maldives Pvt. Ltd.',
				secondLineAddress: 'M. Shaamy Villa, 3rd Floor'
			}
		],

		phoneNumbers: [
			{ booking: true, whatsapp: true, number: '+60182327147' },
			{ whatsapp: true, booking: false, number: '+9609411751' }
		],

		emails: ['rdinternn@gmail.com', 'info@rd.tours'],
		estabilished: 2001,
		members: [
			{
				name: '...',
				role: 'Owner',
				image: '/src/assets/images/owner.png'
			}
		]
	},
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this tour', // Message to share a tour on social media
	paginationSize: 6, // Number of tours per page
	customerCount: 120,
	countryCount: 6,
	fiveStarReviews: 45,
	expensesSaved: 120
}
