import React, { useState } from "react";
import './styles/index.css'
import Context from "./Context";
import Aparat from './partials/Aparat/Aparat'

function ZiZiPay () {
	const [visible,setVisible] = useState('block')
	const [paypage,setPayPage] = useState(1)
	const [gap,setGap] = useState('1.5rem')
	let gaps;
  let element = {
		paypage,setPayPage,
		visible,setVisible,
		gap,setGap
	}	

return(
	<Context.Provider value={element}>
		<div className="zizi-pay">
			<Aparat />
		</div>
	</Context.Provider>
)
}

export default ZiZiPay;