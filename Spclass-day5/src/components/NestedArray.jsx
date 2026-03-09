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
    <div>
        <div>
            {ItemTrend.map((value,index)=>(
                <div key={index}><img src={index.img} alt="" /></div>
            ))}
        </div>
    </div>
   </>
  )
}

export default NestedArray