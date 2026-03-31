import React from 'react'
import UseState from './components/UseState'
import UseEffects from './components/UseEffects'
import UseReffs from './components/UseReffs'
import UseConts from './components/UseConts'

const App = () => {
  return (
    <>
      <div>
        <UseState/>
        <UseEffects/>
        <UseReffs/>
        <UseConts/>
      </div>
    </>
    
  )
}

export default App