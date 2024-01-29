import React from 'react'
import './Header.css'
import headerVideo from '../images/1.mp4'
import { TfiSearch } from "react-icons/tfi";


export default function Header() {
	return (
		<header>
			<video autoPlay loop muted playsInline>
				<source src={headerVideo} type="video/mp4" />
			</video>
			<div className='header-right'>
				<div className='hr-contacts'>
				</div>
				<div className='hr-srch'>
					<TfiSearch />
					<p>ՈՐՈՆԵԼ</p>
				</div>
			</div>
		</header>
	)
}
