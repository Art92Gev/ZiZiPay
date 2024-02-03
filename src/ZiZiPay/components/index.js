import React, { useState } from "react";
import './styles/index.css'
import Context from "./Context";
import Aparat from './partials/Aparat/Aparat'

function ZiZiPay() {
	const [visible, setVisible] = useState('block')
	const [paypage, setPayPage] = useState(1)
	const [paypage1, setPayPage1] = useState(2)
	const [getpayinfo,setGetPayInfo] = useState()
	const [gap, setGap] = useState('1.5rem')
	const [img, setImg] = useState()
	let element = {
		paypage, setPayPage,
		paypage1, setPayPage1,
		visible, setVisible,
		gap, setGap,
		img, setImg,
		getpayinfo,setGetPayInfo
	}

	return (
		<Context.Provider value={element}>
			<div className="zizi-pay">
				<Aparat />
			</div>
		</Context.Provider>
	)
}

export default ZiZiPay;