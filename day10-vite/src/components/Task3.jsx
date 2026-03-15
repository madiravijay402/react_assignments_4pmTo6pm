import React, { useState } from 'react'

const Task3 = () => {
    const[details,setDetails]=useState({name:"vijay",age:22})
    const handlechange=()=>{
        setDetails({...details,name:"ramu"})
    }
  return (
   <>
   <div className='bg-amber-400 flex gap-10 p-5 h-75 '>
    <div>
        <button onClick={handlechange} className='bg-black rounded-2xl p-3 text-white'>update</button>
    </div>
   <div>
        <div className='bg-purple-500 flex flex-col p-5'>
         <p>{details.name}</p>
         <p>{details.age}</p>
    </div>
   </div>
   </div>
   </>
  )
}

export default Task3