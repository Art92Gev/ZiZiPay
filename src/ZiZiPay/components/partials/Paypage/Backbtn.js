import React from 'react'
import Context from '../../Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Backbtn() {
	const element = useContext(Context);
	const navigate = useNavigate()

	return (
		<button
			className='back'
			onClick={() => {
				navigate('/')
				element.setVisible('block');
				element.setPayPage(1);
				element.setGap('1.5rem');
				element.setImg()
				element.setInputValue('0')
				element.setHaz('0')
			}}
		>
			Back
		</button>
	)
}
