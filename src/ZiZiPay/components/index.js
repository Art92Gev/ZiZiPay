import React, { useState } from "react";
import './styles/index.css'
import Context from "./Context";
import Aparat from './partials/Aparat/Aparat'

function ZiZiPay () {
	const [visible,setVisible] = useState('15vh')
	const [paypage,setPayPage] = useState(false)
  let element = {
		paypage,setPayPage,
		visible,setVisible
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