import React, { useRef } from 'react'
import './Aparat.css'
import Context from '../../Context'
import { useContext, useEffect } from 'react'
import HeadContainer from './HeadContainer'
import BodyContainer from './BodyContainer'

export default function Aparat() {
	const element = useContext(Context)
	useEffect(() => {
	}, [element.haz]);
	return (
		<div className='aparat'>
			<HeadContainer />
			<BodyContainer />
		</div>
	)
}
