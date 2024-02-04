import React, { useState } from 'react';
import Context from '../../Context';
import { useContext } from 'react';
import './Paypage.css';
import img from '../images/3.jpg'
import { data } from '../../constants/data';
import { icons1 } from './../../constants/icons2';
import { icons2 } from './../../constants/icons';
import Backbtn from './Backbtn';

export default function Paypage() {
	const element = useContext(Context);
	const randoms = Math.round(Math.random() * (5 * 1000 ))
	const padnum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', 'Del', 'Pay'];

	const handleButtonClick = (value) => {
		if (element.inputValue.length < 9) {
			element.setInputValue((prevValue) => prevValue + value);
		}
	};

	const handleXButtonClick = () => {
		element.setInputValue(element.inputValue.slice(0, -1));
	};

	return (
		<div className='paypage'>
			<img src={img} alt="" />
			<hr />
			<div className='button-pad'>
				<input
					type="text"
					value={element.inputValue}
					readOnly
					/>
				{padnum.map((item, index) => (
					<button key={index} onClick={() => {
						if (item !== 'Del' && item !== 'Pay') {
							handleButtonClick(item)
						}
						else if (element.inputValue.length > 1 && item !== 'Pay') {
							handleXButtonClick()
						}
						else if (item === 'Pay' && element.inputValue.length === 9) {
							data.map((item, index) => {
								if (element.inputValue.includes(item.number)) {
									element.setPayPage(5)
									setTimeout(() => {
										element.setPayPage(3)
										element.setGetPayInfo(element.getpayinfo)
									}, randoms);
									
								}
								else {
									element.setPayPage(5)
									setTimeout(() => {
										element.setPayPage(4)
									}, randoms);
								}})}
					}}>
						{item}
					</button>
				))}
			</div>
			<Backbtn/>
		</div>
	);
}
