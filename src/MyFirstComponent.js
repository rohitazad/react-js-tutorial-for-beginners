import React, { useState } from 'react';

import Footer from './Componets/Footer';
import Header from './Componets/Header';
import State from './Componets/State';

const MyFirstComponent = ()=>{
    let [myvalue, setMyvalue] = useState('Rohit Azad');
    const handleClick = ()=>{
      return  (
        setMyvalue(myvalue = 'React Js')
      )
    }
    return(
        <>
        <Header/>
            <State mystate={myvalue}/>
            <input value={myvalue} type="text" onChange={(e)=>{
                setMyvalue(myvalue = e.target.value)
            }} />
            <button onClick={()=>{
                handleClick();
            }}>
                Click me
            </button>
        <Footer />
        </>
    )
}

export default MyFirstComponent;