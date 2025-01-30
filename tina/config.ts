import { CATEGORIES } from '../src/data/categories.ts'
import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: '1d3715c5-14d8-43fc-9d44-14aeb20542b3', // Get this from tina.io
	token: 'a88b1270d4ad37284d9a7086baf4f8a39e77aed7', // Get this from tina.io

	// clientId: null, // Get this from tina.io
	// token: null, // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
		basePath: 'website'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets/images',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				name: 'countries',
				label: 'Countries',
				path: 'src/content/countries',
				format: 'mdx',
				fields: [
					{
						name: 'name',
						type: 'string',
						label: 'Name',
						required: true,
						description: 'Name of the country'
					},

					{
						name: 'description',
						type: 'string',
						label: 'Description',
						required: true,
						description: 'Description of the country'
					},

					{
						name: 'coverImage',
						type: 'image',
						label: 'Cover Image',
						required: true,
						description: 'Cover Image of the Country'
					}
				]
			},

			{
				name: 'tour',
				label: 'Tour',
				path: 'src/content/tours',
				format: 'mdx',
				fields: [
					{
						type: 'image',
						label: 'Cover Image',
						required: true,
						name: 'heroImage',
						description: 'The image used for the cover of the tour'
					},

					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						description: 'Select an category for this tour',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						label: 'description',
						required: true,
						name: 'description',
						description: 'A short description of the tour'
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Publication Date',
						required: true
					},
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
						description: 'If this is checked the tour will not be published'
					},
					{
						name: 'minPeopleCount',
						label: 'Minimum People Count',
						type: 'number',
						description: 'The amount of people needed for this package'
					},

					{
						name: 'price',
						label: 'Price',
						type: 'number',
						description: 'Price for the tour'
					},

					{
						name: 'duration',
						label: 'Duration',
						type: 'string',
						description: 'Duration of the tour package'
					},
					{
						label: 'Country',
						name: 'country',
						type: 'reference',
						collections: ['countries'],
						description: 'Country for this tour',
						required: true
					},
					{
						type: 'string',
						name: 'city',
						required: true,
						label: 'City',
						description: 'City for this tour'
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'SButton',
						isBody: true,
						templates: [
							// Custom Components
							{
								label: 'SButton',
								name: 'SButton',
								fields: [
									{
										type: 'rich-text',
										label: 'SButton',
										name: 'children',
										isBody: true
									}
								]
							}
						]
					}
				]
			}
		]
	}
})
