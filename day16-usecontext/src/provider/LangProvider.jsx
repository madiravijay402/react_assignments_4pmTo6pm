import React, { Children, useState } from 'react'
import Countcontext from '../createcontext/Countcontext'

const LangProvider = ({Children}) => {
    const[lan,setLan]=useState("en")
  return (
    <Countcontext.Provider value={{lan,setLan}}>
        {Children}
    </Countcontext.Provider>
  )
}

export default LangProvider