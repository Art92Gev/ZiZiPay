import React from 'react'
import './Main.css'
import Context from '../../Context'
import { useContext } from 'react'


export default function Main() {
	const element = useContext(Context)


	let main2 = [1,2,3,4,5,6,7,8,9,10,11,12]
	let main1 = [1,2,3,4,5,6,7,8]
	return (
		<main>
			<div className='main-1'>
				{main1.map((item,index)=> (
					<button key={index} onClick={()=> {
						element.setVisible('none')
						element.setPayPage(2)
						element.setGap('0')
						console.log(element.gaps);
					}}>bye</button>
				))}
			</div>
			<div className='main-2'>
				{main2.map((item,index) => (
					<button key={index}>helo</button>
				))}
			</div>
		</main>
	)
}
