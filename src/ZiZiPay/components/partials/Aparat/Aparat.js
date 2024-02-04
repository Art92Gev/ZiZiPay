import React, { useRef } from 'react'
import './Aparat.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Context from '../../Context'
import { useContext, useEffect } from 'react'
import Paypage from '../Paypage/Paypage'
import Paytrue from '../truefalsepage/Paytrue'
import Payfalse from '../truefalsepage/Payfalse'
import Loading from '../truefalsepage/Loading'
import qsan from './52-1280x720.jpg'
import tas from './53-1280x720.jpg'
import hazar from './bonscan_04-30-2022_00025-1280x720.jpg'
import hing from './bonscan_04-30-2022_00034-1280x720.jpg'

export default function Aparat() {
	const element = useContext(Context)
	let arrpox = [hazar, hing, tas, qsan]
	useEffect(() => {
		console.log(element.haz); // Log the updated value after each render
	}, [element.haz]);
	return (
		<div className='aparat'>
			<div className='head-container'>
				<div className='ekran' style={{ gap: element.gap }}>
					<Header />
					{element.paypage === 1 ? (<Main />)
						: element.paypage === 2 ? (<Paypage />)
							: element.paypage === 3 ? (<Paytrue />)
								: element.paypage === 4 ? (<Payfalse />)
									: element.paypage === 5 ? <Loading /> : null}
					<Footer />
				</div>
			</div>
			<div className='body-container'>
				<div className='coin'></div>
				<div className='cashcode' style={{ background: element.paypage === 3 ? '#26a709' : '#e40909d4', transition: '1s' }}>
					<hr />
				</div>
				<div className='money'>
					{arrpox.map((item, index) => (
						<button
							className='pox'
							key={index}
							style={{ backgroundImage: `url(${item})`, top: element.paypage === 3 ? '50%' : '100%' }}
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
		</div>
	)
}
