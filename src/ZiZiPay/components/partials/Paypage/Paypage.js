import React, { useState } from 'react';
import Context from '../../Context';
import { useContext } from 'react';
import './Paypage.css';

export default function Paypage() {
  const element = useContext(Context);
  const [inputValue, setInputValue] = useState(0);

  const handleButtonClick = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const handleXButtonClick = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <div className='paypage'>
      <div className='button-pad'>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() =>  inputValue > 0 ?  handleXButtonClick('x') : ''}>del</button>
				<button className='hastatel'>Accept</button>
      </div>
      <button className='back' onClick={() => {
        element.setVisible('15vh');
        element.setPayPage(false);
				console.log(element.visible);

      }}>Back</button>
    </div>
  );
}
