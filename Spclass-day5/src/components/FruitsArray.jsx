import React from 'react'

const FruitsArray = () => {
    const fruits=["apple","banana","orange","Mango"]
  return (
    <>
      <div className='bg-red-600'>
        {
            fruits.map((value)=>{
                return <li key={value}>{value}</li>
            })
        }  
      </div>  
    </>
  )
}

export default FruitsArray