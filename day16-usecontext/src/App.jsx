import React from 'react'
import Pages from './Pages/Pages'
import ThemeProvider from './provider/ThemeProvider'
import LangProvider from './provider/LangProvider'

const App = () => {
  return (
   <>
   <ThemeProvider>
       <LangProvider>
           <Pages/>
       </LangProvider>
   </ThemeProvider>
      
   
   </>
  )
}

export default App