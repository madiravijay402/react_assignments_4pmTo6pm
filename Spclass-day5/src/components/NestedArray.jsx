import React from 'react'

const NestedArray = () => {
    let ItemTrend=[
        {
            name:"mobile",
            img:"/3mobile.png",
            features:{dsc:"50% offer",time:"3days left"}
        },
        {
            name:"Air conditioner",
            img:"/ac.png",
            features:{dsc:"45% offer",time:"3 days left"}
        },
        {
            name:"Home theatre",
            img:"/hometheatre.png",
            features:{dsc:"75% offer",time:"2 days left"}
        }
    ]
  return (
   <>
    <div className='p-5'>
        <div className='flex justify-around gap-5'>
            {ItemTrend.map((value,index)=>(
                <div key={index} className='flex flex-col items-center gap-5 border-2 p-4 bg-white rounded-2xl hover:scale-105 transition-transform'>
                    <div><img src={value.img} alt="" /></div>
                    <div className='flex flex-col items-center gap-2'>
                        <span className='hover:text-blue-500 cursor-pointer'>{value.features.dsc}</span>
                        <span className='hover:text-blue-500 cursor-pointer'>{value.features.time}</span>
                        <div><button className='bg-amber-500 p-2 rounded-2xl'>Add to Cart</button></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
   </>
  )
}

export default NestedArray