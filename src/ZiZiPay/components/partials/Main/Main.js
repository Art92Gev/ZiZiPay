import React, { useState, useEffect } from 'react'
import './Main.css'
import Context from '../../Context'
import { useContext } from 'react'
import { icons1 } from './../../constants/icons2'
import { icons2 } from './../../constants/icons';

export default function Main() {
  const element = useContext(Context)


  return (
    <main>
      <div className='main-1'>
        {icons1.map((item, index) => (
          <button key={index} onClick={() => {
            element.setVisible('none');
            element.setGap('0');
            element.setPayPage(2);
          }}>{item.icon}{item.name}</button>
        ))}
      </div>
      <div className='main-2'>
        {icons2.map((item, index) => (
          <button style={{ backgroundImage: `url(${item.icon})` }} key={index} onClick={() => {
            element.setGetPayInfo(item);
            element.setVisible('none');
            element.setGap('0');
            element.setPayPage(2);
            element.setImg(item.icon);
          }}></button>
        ))}
      </div>
    </main>
  )
}
