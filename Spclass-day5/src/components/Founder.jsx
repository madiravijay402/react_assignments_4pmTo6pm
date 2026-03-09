import React from 'react'
import pf from '../assets/vk.jpg'
const Founder = () => {
    const name="Vasanth Kumar"
    const bd="1950-2020"
    const city="chennai"
  return (
    <>
        <div className='flex flex-wrap justify-around my-20 bg-amber-500 items-center mx-20 p-5'>
            <div className='w-45 rounded'>
                <img src={pf} alt="" />
            </div>
            <div className='flex-col justify-center g-5'>
                <h2 className='font-extrabold text-5xl'>{name}</h2>
                <h3>{bd}</h3>
                <h3>{city}</h3>
            </div>
        </div>
    </>
  )
}

export default Founder