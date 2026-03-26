import React, { useState } from 'react'
import LangContext from '../createcontext/LangContext'

const LangProvider = ({children}) => {
    const[lan,setLan]=useState("en")
  return (
    <LangContext.Provider value={{lan,setLan}}>
        {children}
    </LangContext.Provider>
  )
}

export default LangProvider