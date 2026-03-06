import React from 'react'

const Slide1 = () => {
    let arraynew=[{name:"vijay",age:22},{name:"raghu",age:24},{name:"praveen",age:23}]
    const present=false;
  return (
    <>
    <div className='my-3 text-center items-center p-3 flex justify-center gap-3'>
        <h2 className='bg-black rounded text-white text-center items-center p-3 w-64'>ternory operator and mapping array of objects</h2>
    {present?<div className=' flex-col text-center align-middle items-center p-3'>
        {arraynew.map((item,id)=>(
            <p key={id}>{item.name}-{item.age}</p>
        ))}
    </div>:<div className='bg-blend-darken border-amber-300 border-2 text-2xl text-black p-3'>
        server down bhayya
    </div>
    }
     </div>
    </>
  )
}

export default Slide1