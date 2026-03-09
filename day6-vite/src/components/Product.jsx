import React from 'react'

const Product = ({data}) => {
  return (
    <>
    <div className=''>
        {data.map((val)=>{
            <div>
            <div key={val.id}>{val.name}</div>
            <div key={val.id}>{val.price}</div>
            </div>
        })}
    </div>
    </>
  )
}

export default Product