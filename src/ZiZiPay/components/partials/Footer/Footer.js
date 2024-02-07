import React from 'react'
import './Footer.css'
import Context from '../../Context'
import { useContext } from 'react'
import { FaOrcid } from "react-icons/fa6";


export default function Footer() {
	const element = useContext(Context)
	return (
		<footer style={{ display: element.visible }}>
			<div className='all'>All operators</div>
			<div className='term-id'><FaOrcid /> : 0001</div>
		</footer>
	)
}
