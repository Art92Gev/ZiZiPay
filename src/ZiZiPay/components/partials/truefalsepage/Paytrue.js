import React from 'react';
import Backbtn from '../Paypage/Backbtn';
import './truefalse.css';
import Context from '../../Context';
import { useContext } from 'react';

const random = Math.round(Math.random() * 10000);
export default function Paytrue() {
	const element = useContext(Context);
  return (
    <div className='paytrue'>
      <div className='user-info'>
        <div className='user-infoup'>
          <h2>Info</h2>
          <p>Need to pay : {random}</p>
          <p>Number: {element.inputValue}</p>
          <Backbtn />
        </div>
      </div>
      <div className='monet-in'>
        <h3>Pay-in Cash</h3>
        <h2>{element.haz}$</h2>
        <p>Comission</p>
        <p>Paying at all :</p>
      </div>
    </div>
  );
}
