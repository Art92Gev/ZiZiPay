import React from 'react'
import './Aparat.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default function Aparat() {
	return (
		<div className='aparat'>
			<div className='head-container'>
				<div className='ekran'>
					<Header/>
					<Main />
					<Footer />
				</div>
			</div>
			<div className='body-container'>
				<hr />
			</div>
		</div>
	)
}
