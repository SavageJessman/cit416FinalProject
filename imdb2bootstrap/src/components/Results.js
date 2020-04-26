import React from 'react'

import Result from './Result'

function Results ({ results, onOpenModal }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.m_ID} result={result} onOpenModal={onOpenModal} />
			))}
		</section>
	)
}

export default Results
