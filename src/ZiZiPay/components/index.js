import React, { useState } from "react";
import './styles/index.css'
import Context from "./Context";
import Aparat from './partials/Aparat/Aparat'
import { BrowserRouter } from "react-router-dom";


function ZiZiPay() {
	const [img, setImg] = useState()
	const [inputValue, setInputValue] = useState('0');
	const [haz, setHaz] = useState(null)
	let element = {
		img, setImg,
		inputValue, setInputValue,
		haz,setHaz
	}

	return (
		<Context.Provider value={element}>
			<div className="zizi-pay">
				<BrowserRouter>
				<Aparat />
				</BrowserRouter>
			</div>
		</Context.Provider>
	)
}

export default ZiZiPay;