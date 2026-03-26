import React, { useState } from 'react'
import ThemeContext from '../createcontext/ThemeContext'

const ThemeProvider = ({children}) => {
    const[toggle,setToggle]=useState(false)
    const changeTheme=()=>{
        setToggle(!toggle)
    }
  return (
    <>
        <ThemeContext.Provider value={{toggle,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider