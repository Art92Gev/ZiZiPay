import React, { useState } from 'react';
import Context from '../../Context';
import { useContext } from 'react';
import './Paypage.css';
import img from '../images/3.jpg'
import { data } from '../../constants/data';
import { icons1 } from './../../constants/icons2'
import { icons2 } from './../../constants/icons';
import Backbtn from './Backbtn';

export default function Paypage() {
	const element = useContext(Context);
	const [inputValue, setInputValue] = useState('0');

	const padnum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', 'Del', 'Pay'];

	const handleButtonClick = (value) => {
		if (inputValue.length < 9) {
			setInputValue((prevValue) => prevValue + value);
		}
	};

	const handleXButtonClick = () => {
		setInputValue((prevValue) => prevValue.slice(0, -1));
	};

	return (
		<div className='paypage'>
			<img src={img} alt="" />
			<hr />
			<div className='button-pad'>
				<input
					type="text"
					value={inputValue}
					readOnly
				/>
				{padnum.map((item, index) => (
					<button key={index} onClick={() => {
						if (item !== 'Del' && item !== 'Pay') {
							handleButtonClick(item)
						}
						else if (inputValue.length > 1 && item !== 'Pay') {
							handleXButtonClick()
						}
						else if (item === 'Pay') {
							data.map((item, index) => {
								if (inputValue.includes(item.number)) {
									element.setGetPayInfo(element.getpayinfo)
									element.setPayPage(3)
								}
								else {
									element.setPayPage(4)
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
