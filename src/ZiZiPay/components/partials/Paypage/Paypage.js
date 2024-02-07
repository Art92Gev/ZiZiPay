import React, { useContext } from 'react';
import Context from '../../Context';
import './Paypage.css';
import img from '../images/3.jpg';
import Backbtn from './Backbtn';
import { useNavigate } from 'react-router-dom';
import { data } from '../../constants/data';
import Header from './../Header/Header';


export default function Paypage() {
	const element = useContext(Context);
	const randoms = Math.round(Math.random() * (5 * 1000));
	const padnum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', 'Del', 'Pay'];
	const navigate = useNavigate()

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
			<Header />
			<div className='paypage-container'>
				<img src={img} alt="" />
				<hr/>
				<div className='button-pad'>
					<input style={{borderBottom : element.inputValue.length ===  9 ? ' #98BD36 3px solid' : ' rgb(188, 127, 13) 2px solid'}}
						type="text"
						value={element.inputValue}
						readOnly
					/>
					{padnum.map((item, index) => (
						<button key={index} onClick={() => {
							if (item !== 'Del' && item !== 'Pay') {
								handleButtonClick(item);
							} else if (element.inputValue.length > 1 && item !== 'Pay') {
								handleXButtonClick();
							} else if (item === 'Pay' && element.inputValue.length === 9) {
								navigate('/Loading')
								alert('True number is : 043996633')
								data.forEach((item, index) => {
									if (element.inputValue.includes(item.number)) {
										setTimeout(() => {
											navigate('/Paytrue')
										}, randoms);
									} else {
										setTimeout(() => {
											navigate('/Payfalse')
										}, randoms);
									}
								});
							}
						}}>
							{item}
						</button>
					))}
				</div>
			</div>
			<Backbtn />
		</div>
	);
}
