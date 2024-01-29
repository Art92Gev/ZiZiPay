import React from "react";
import './styles/index.css'
import Context from "./Context";
import Aparat from './partials/Aparat/Aparat'

function ZiZiPay () {


return(
	<Context.Provider>
		<div className="zizi-pay">
			<Aparat />
		</div>
	</Context.Provider>
)
}

export default ZiZiPay;