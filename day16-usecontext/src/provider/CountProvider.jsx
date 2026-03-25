import React, { useState } from 'react'
import Countcontext from '../createcontext/Countcontext';

const CountProvider = ({children}) => {
    const[data,setData]=useState(0);
    const handlechange=()=>{
        setData((pre)=>pre+1)
    }
  return (
    <Countcontext.Provider value={{handlechange,data}}>
        {children}
    </Countcontext.Provider>
  )
}

export default CountProvider