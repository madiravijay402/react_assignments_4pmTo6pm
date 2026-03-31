import React, { useState } from 'react'
import CreateCount from '../Context/Createcount'

const CountProvider = ({children}) => {
    const[value,setValue]=useState("");
    const handlechange=(e)=>{
        setValue(e.target.value)
    }
  return (
    <CreateCount.Provider value={{value,handlechange}}>
        {children}
    </CreateCount.Provider>
  )
}

export default CountProvider