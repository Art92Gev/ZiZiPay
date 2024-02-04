import React from 'react'
import './Aparat.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Context from '../../Context'
import { useContext } from 'react'
import Paypage from '../Paypage/Paypage'
import Paytrue from '../truefalsepage/Paytrue'
import Payfalse from '../truefalsepage/Payfalse'
import Loading from '../truefalsepage/Loading'

export default function Aparat() {
	const element = useContext(Context)


	return (
		<div className='aparat'>
			<div className='head-container'>
				<div className='ekran' style={{ gap: element.gap }}>
					<Header />
					{element.paypage === 1 ? (<Main />)
						: element.paypage === 2 ? (<Paypage />)
							: element.paypage === 3 ? (<Paytrue />)
								: element.paypage === 4 ? (<Payfalse />)
									: element.paypage === 5 ? <Loading /> : null}
					<Footer />
				</div>
			</div>
			<div className='body-container'>
				<hr />
			</div>
		</div>
	)
}
