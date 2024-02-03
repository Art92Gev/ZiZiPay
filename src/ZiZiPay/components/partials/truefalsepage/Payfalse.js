import React from 'react'
import { FaRectangleXmark } from "react-icons/fa6";
import Backbtn from '../Paypage/Backbtn';

export default function Payfalse() {
	return (
		<div className='payfalse'><FaRectangleXmark />
		<h2>Connection Error</h2>
		<Backbtn/>
		</div>
	)
}
