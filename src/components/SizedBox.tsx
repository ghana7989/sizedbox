import React from 'react'
import { getDimensionValue } from '../utils'

export interface SizedBoxProps {
	vertical?: number | string
	horizontal?: number | string
}

const SizedBox: React.FC<SizedBoxProps> = ({ vertical, horizontal }) => {
	// Ensure at least one of the dimensions is provided
	if (vertical === undefined && horizontal === undefined) {
		throw new Error(
			'Either vertical or horizontal dimension must be provided for SizedBox.'
		)
	}

	const style: React.CSSProperties = {
		width: getDimensionValue(horizontal),
		height: getDimensionValue(vertical),
		display: 'block', // Ensure the div is block-level to respect width and height
	}

	return <div style={style} />
}

export default SizedBox
