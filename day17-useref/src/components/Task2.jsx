import React, { useRef } from 'react'

const Task2 = () => {
    const CountRef=useRef(0);
    const showRef=useRef(null);
    const handlechange=()=>{
        CountRef.current +=1;
        console.log("count:",CountRef.current);
        showRef.current.innerText=CountRef.current
    }
  return (
   <>
    <div className='bg-red-700 text-yellow p-2 flex flex-col justify-center items-center'>
        <button onClick={handlechange} className='bg-black text-white rounded p-2'>increase</button>
        <p ref={showRef}></p>
    </div>
   </>
  )
}

export default Task2