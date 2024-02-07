import React from 'react'
import Paypage from '../Paypage/Paypage'
import Paytrue from '../truefalsepage/Paytrue'
import Payfalse from '../truefalsepage/Payfalse'
import Loading from '../truefalsepage/Loading'
import Main from '../Main/Main'
import Context from '../../Context'
import { useContext } from 'react'
import bg from '../images/blurback.jpg'
import { Route, Routes } from 'react-router-dom'


export default function HeadContainer() {
	const element = useContext(Context)

	return (
		<div className='head-container'>
			<div className='ekran' style={{ background: `url(${bg}` }}>
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/Paypage' element={<Paypage />}></Route>
					<Route path='/Paytrue' element={<Paytrue />}></Route>
					<Route path='/Payfalse' element={<Payfalse />}></Route>
					<Route path='/Loading' element={<Loading />}></Route>
				</Routes>
			</div>
		</div>
	)
}
