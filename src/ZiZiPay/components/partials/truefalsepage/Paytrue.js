import React from 'react'
import Backbtn from '../Paypage/Backbtn'
import './truefalse.css'

export default function Paytrue() {
	return (
		<div className='paytrue'>
			<div className='user-info'>
				<div className='user-infoup'>
					<h2>Info</h2>
					<p>Need to pay :</p>
					<p>Number:</p>
					<Backbtn />
				</div>
			</div>
			<div className='monet-in'>
				<h3>Pay-in Cash</h3>
				<h2>0$</h2>
				<p>Comission</p>
				<p>Paying at all :</p>
			</div>
		</div>
	)
}
