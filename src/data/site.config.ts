interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Your Name', // Site author
	title: 'Tour Agency', // Site title.
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta countries
	agency: '[AGENCY NAME]',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this tour', // Message to share a tour on social media
	paginationSize: 6, // Number of tours per page
	customerCount: 120,
	countryCount: 6,
	estabilishmentYear: 2001,
	fiveStarReviews: 45,
	expensesSaved: 120,
	firstLineAddress: 'Mavis Island',
	secondLineAddress: 'Chicago, IL, 99191',
	phoneNumber: '+1 (555) 234-5678',
	email: 'hello@example.com'
}
