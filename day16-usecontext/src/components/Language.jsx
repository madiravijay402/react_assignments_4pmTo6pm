import React, { useContext } from 'react'
import ThemeContext from '../createcontext/ThemeContext'
import LangContext from '../createcontext/LangContext'

const Language = () => {
    const{lan,setLan}=useContext(LangContext)
    const{toggle}=useContext(ThemeContext)
  return (
    <>
    <div>
        {toggle? <div className='bg-black text-white rounded p-2 flex flex-col items-center justify-center'>
            <p>{lan==="en"?"welcome":"vanakam"}</p>
        <button onClick={()=>setLan("en")}>english</button>
        <button onClick={()=>setLan("tn")}>tamil</button>
        </div>: <div className='bg-white text-black rounded p-2 flex flex-col items-center justify-center'>
            <p>{lan==="en"?"welcome":"vanakam"}</p>
        <button onClick={()=>setLan("en")}>english</button>
        <button onClick={()=>setLan("tn")}>tamil</button>
        </div>}
       
        
    </div>
        
    </>
  )
}

export default Language