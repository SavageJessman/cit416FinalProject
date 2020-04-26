import React from 'react'

function Result({ result, onOpenModal }) {
	console.log("I was called Result");
	return (
		<div className="result" onClick={() => onOpenModal(result.m_ID)}>
			<img src={result.m_pic} />
			<h3>{result.m_title}</h3>
		</div>
		
	)
}

export default Result
