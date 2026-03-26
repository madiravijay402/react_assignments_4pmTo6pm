import React, { useState } from 'react'
import Countcontext from '../createcontext/Countcontext'

const ThemeProvider = ({children}) => {
    const[toggle,setToggle]=useState(false)
    const changeTheme=()=>{
        setToggle(!toggle)
    }
  return (
    <>
        <Countcontext.Provider value={{toggle,changeTheme}}>
            {children}
        </Countcontext.Provider>
    </>
  )
}

export default ThemeProvider