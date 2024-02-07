import React from 'react'
import qsan from '../images/52-1280x720.jpg'
import tas from '../images/53-1280x720.jpg'
import hazar from '../images/bonscan_04-30-2022_00025-1280x720.jpg'
import hing from '../images/bonscan_04-30-2022_00034-1280x720.jpg'
import Context from '../../Context'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

export default function BodyContainer() {
	const element = useContext(Context)
	const location = useLocation()
	let arrpox = [hazar, hing, tas, qsan]
	return (
		<div className='body-container'>
			<div className='cashcode' style={{ background: location.pathname === '/Paytrue' ? '#26a709' : '#e40909d4', transition: '1s' }}>
				<hr />
			</div>
			<div className='money'>
				{arrpox.map((item, index) => (
					<button
						className='pox'
						key={index}
						style={{ backgroundImage: `url(${item})`, top: location.pathname === '/Paytrue' ? '50%' : '100%' }}
						onClick={() => {
							if (index === 0) {
								element.setHaz((prevHaz) => +prevHaz + +"1000");
							} else if (index === 1) {
								element.setHaz((prevHaz) => +prevHaz + +"5000");
							} else if (index === 2) {
								element.setHaz((prevHaz) => +prevHaz + +"10000");
							} else if (index === 3) {
								element.setHaz((prevHaz) => +prevHaz + +"20000");
							}
						}}
					></button>
				))}
			</div>
		</div>
	)
}
