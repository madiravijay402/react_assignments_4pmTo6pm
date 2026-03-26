import React from 'react'
import Pages from './Pages/Pages'
import ThemeProvider from './provider/ThemeProvider'
import LangProvider from './provider/LangProvider'
import CountProvider from './provider/CountProvider'

const App = () => {
  return (
   <>
   <ThemeProvider>
       <LangProvider>
           <CountProvider>
               <Pages/>
           </CountProvider>
       </LangProvider>
   </ThemeProvider>
      
   
   </>
  )
}

export default App