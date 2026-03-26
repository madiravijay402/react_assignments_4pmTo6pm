import React from 'react'
import Pages from './Pages/Pages'
import ThemeProvider from './provider/ThemeProvider'

const App = () => {
  return (
   <>
   <ThemeProvider>
       <Pages/>
   </ThemeProvider>
      
   
   </>
  )
}

export default App