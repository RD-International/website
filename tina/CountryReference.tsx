'use client'

import React, { useEffect, useState } from 'react'
import { Client, useCMS, wrapFieldsWithMeta } from 'tinacms'

interface CountryOption {
	name: string
	value: string
}

const CountryReference = wrapFieldsWithMeta(({ input }) => {
	const collectionName = 'Countries'
	const collectionString = collectionName.toLowerCase()
	const connectionName = `${collectionString}Connection`
	const [options, setOptions] = useState<CountryOption[]>([])
	const cms = useCMS()

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const client = cms.api.tina as Client
				//@ts-ignore
				const res = await client.request<{
					//@ts-ignore
					[connectionName]: {
						edges: { node: { id: string; name: string } }[]
					}
				}>(
					`
        query ${connectionName} {
          ${connectionName} {
            edges {
              node {
                id
                name
              }
            }
          }
        }
        `
				)

				const nodes = res[connectionName]?.edges?.map((edge) => edge.node) || []
				const opts = nodes.map((n) => ({
					name: n.name,
					value: n.id.split('/').pop()?.split('.')[0] || ''
				}))

				setOptions(opts)
			} catch (error) {
				console.error('Error fetching countries:', error)
			}
		}

		fetchCountries()
	}, [cms])

	return (
		<div>
			<div className='mt-2 grid grid-cols-1'>
				<select
					id='location'
					name='location'
					value={input.value}
					onChange={input.onChange}
					className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
				>
					{options.map((p, idx) => (
						<option key={idx} value={p.value}>
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
