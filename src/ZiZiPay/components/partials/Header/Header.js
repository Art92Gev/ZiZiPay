import React from 'react'
import './Header.css'
import headerVideo from '../images/1.mp4'
import { TfiSearch } from "react-icons/tfi";
import Context from '../../Context';
import { useContext } from 'react';

export default function Header() {
	const element = useContext(Context);
	return (
		<header>
			<div className='icon-logo'>
				{element.paypage === 1 || element.img === undefined ?
					<video autoPlay loop muted playsInline>
						<source src={headerVideo} type="video/mp4" />
					</video>
					: element.paypage === 2
					&&
					<img src={element.img} alt="" />
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
