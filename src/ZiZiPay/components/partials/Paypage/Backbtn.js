import React from 'react'
import Context from '../../Context';
import { useContext } from 'react';

export default function Backbtn() {
	const element = useContext(Context);

	return (
		<button
			className='back'
			onClick={() => {
				element.setVisible('block');
				element.setPayPage(1);
				element.setGap('1.5rem');
				element.setImg()
			}}
		>
			Back
		</button>
	)
}
