import React from 'react'
import './Aparat.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Context from '../../Context'
import { useContext } from 'react'
import Paypage from '../Paypage/Paypage'

export default function Aparat() {
	const element = useContext(Context)
	

	return (
		<div className='aparat'>
			<div className='head-container'>
				<div className='ekran' style={{gap : element.gap }}>
					<Header/>
					{!element.paypage ? <Main/>  : <Paypage/>}
					<Footer />
				</div>
			</div>
			<div className='body-container'>
				<hr />
			</div>
		</div>
	)
}
