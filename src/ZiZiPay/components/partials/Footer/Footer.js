import React, { useState } from 'react'
import './Footer.css'
import Context from '../../Context'
import { useContext } from 'react'
export default function Footer() {
	const element = useContext(Context)
	return (
		<footer style={{display: element.visible}}>
			
		</footer>
	)
}
