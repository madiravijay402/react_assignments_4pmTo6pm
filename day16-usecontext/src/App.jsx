import React from 'react'
import Pages from './Pages/Pages'
import CountProvider from './provider/CountProvider'

const App = () => {
  return (
   <>
   <CountProvider>
       <Pages/>
   </CountProvider>
   </>
  )
}

export default App