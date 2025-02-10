'use client'

import React from 'react'
import { Client, useCMS, wrapFieldsWithMeta } from 'tinacms'

const TourSelect = wrapFieldsWithMeta(({ input }) => {
	const collectionName = 'Tours'
	const collectionString = collectionName.toLowerCase()
	const connectionName = `${collectionString}Connection`
	const [options, setOptions] = React.useState([])
	const cms = useCMS()
	React.useEffect(() => {
		const run = async () => {
			const client = cms.api.tina as Client
			const res = await client.request(
				`
    query ${connectionName} {
      ${connectionName} {
        totalCount
        edges {
          cursor
          node {
            __typename
            ... on ${collectionName} {
              id
              title
              
            }
          }
        }
      }
    }
    `,
				{ variables: {} }
			)
			const nodes: any[] = []
			res[connectionName].edges?.map((edge) => nodes.push(edge.node))
			const opts = nodes.map((n) => ({
				name: n.title,
				value: n.id.split('/').pop().split('.')[0]
			}))
			setOptions(opts)
		}
		run()
	}, [])

	return (
		<div>
			<div className='mt-2 grid grid-cols-1'>
				{input.value}
				<select
					id='featuredTour'
					name='featuredTour'
					onChange={input.onChange}
					className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
				>
					{options.map((p, idx) => (
						<option value={p.value} key={idx} selected={p.value == input.value}>
							{p.name}
						</option>
					))}
				</select>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4'
				>
					<path d='m6 9 6 6 6-6' />
				</svg>
			</div>
		</div>
	)
})

export default TourSelect
