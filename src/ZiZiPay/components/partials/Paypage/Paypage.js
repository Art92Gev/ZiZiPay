import React, { useContext } from 'react';
import Context from '../../Context';
import './Paypage.css';
import img from '../images/3.jpg';
import Backbtn from './Backbtn';
import { padFunctions } from '../actions/Functions';

export default function Paypage() {
  const element = useContext(Context);
  const randoms = Math.round(Math.random() * (5 * 1000));
  const padnum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', 'Del', 'Pay'];
  const handleButtonClick = (value) => {
    if (element.inputValue.length < 9) {
      element.setInputValue((prevValue) => prevValue + value);
    }
  };

  const handleXButtonClick = () => {
    element.setInputValue(element.inputValue.slice(0, -1));
  };

  return (
    <div className='paypage'>
      <img src={img} alt="" />
      <hr />
      <div className='button-pad'>
        <input
          type="text"
          value={element.inputValue}
          readOnly
        />
        {padnum.map((item, index) => (
          <button key={index} onClick={() => padFunctions(item, element, randoms, handleButtonClick, handleXButtonClick)}>
            {item}
          </button>
        ))}
      </div>
      <Backbtn />
    </div>
  );
}
