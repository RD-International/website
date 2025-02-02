'use client'

import React, { useState } from 'react'
import { Client, useCMS, wrapFieldsWithMeta } from 'tinacms'

const CountryReference = wrapFieldsWithMeta((args: any) => {
	const [countries, setCountries] = React.useState([])
	const cms = useCMS()
	React.useEffect(() => {
		const run = async () => {
			const client = cms.api.tina as Client
			const res = await client.request(
				`
    query countriesConnection {
      countriesConnection {
        totalCount
        edges {
          cursor
          node {
            __typename
            ... on Countries {
              id
name
              
            }
          }
        }
      }
    }
    `,
				{ variables: {} }
			)
			const nodes: any[] = []
			res.countriesConnection.edges?.map((edge) => nodes.push(edge.node))
			const opts = nodes.map((n) => ({
				name: n.name,
				value: n.id.split('/').pop().split('.')[0]
			}))
			setCountries(opts)
		}
		run()
	}, [])

	return (
		<div>
			<div className='mt-2 grid grid-cols-1'>
				<select
					id='location'
					name='location'
					defaultValue='Canada'
					onChange={args.input.onChange}
					className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
				>
					{countries.map((p, idx) => (
						<option value={p.value} key={idx}>
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

export default CountryReference
