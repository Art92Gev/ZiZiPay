import React from 'react'
import './Header.css'
import headerVideo from '../images/1.mp4'
import { TfiSearch } from "react-icons/tfi";
import Context from '../../Context';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom'


export default function Header() {
	const element = useContext(Context);
	const location = useLocation();

	return (
		<header>
			<div className='icon-logo'>
				{location.pathname === '/' ?
					(
						<video autoPlay loop muted playsInline>
							<source src={headerVideo} type="video/mp4" />
						</video>
					)
					:
					(
						<img src={element.img} alt="" />
					)
				}

			</div>
			<div className='header-right'>
				<div className='hr-contacts'>
				</div>
				<div className='hr-srch'>
					<TfiSearch />
				</div>
			</div>
		</header>
	)
}
