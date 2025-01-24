interface SiteConfig {
	site: string
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
		address: {
			firstLineAddress: string
			secondLineAddress: string
		}
		phoneNumber: string
		email: string
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
	site: 'https://3urdparty.github.io/travel-agency/', // Write here your website url
	author: 'Your Name', // Site author
	title: 'RD Intl. Travel Agency', // Site title.
	description: 'Muslim Travel Agency specialising in South East Asia', // Description to display in the meta countries
	company: {
		name: 'RD International',
		shortName: 'RD Intl.',
		address: {
			firstLineAddress: 'Mavis Island',
			secondLineAddress: 'Chicago, IL, 99191'
		},
		phoneNumber: '+1 (555) 234-5678',
		email: 'hello@example.com',
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
