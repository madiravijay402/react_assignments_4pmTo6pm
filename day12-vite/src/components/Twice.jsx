import React, { useState } from 'react'

const Twice = ()=> {
    const[db,setDb]=useState(0)
    const inc=()=>{
        setDb((pre)=>pre+2)
    }
  return (
   <>
    <div>
        <h2>double : {db}</h2>
        <button onClick={inc}>double</button>
    </div>
   </>
  )
}

export default Twice