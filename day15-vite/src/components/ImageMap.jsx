import React, { useState } from 'react'

const ImageMap = () => {
  const [info, setInfo] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes")
      const data = await res.json()
      setInfo(data.recipes)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex bg-amber-500 flex-wrap justify-around text-white p-3 gap-4'>
        {info.map((u) => (
          <div key={u.id} className='bg-black p-3 flex flex-col rounded-2xl items-center'>
            <div>
              <img src={u.image} alt={u.name} width="200" />
            </div>
            <div>{u.name}</div>
          </div>
        ))}
      </div>

      <button onClick={fetchData} className='bg-black p-2 rounded text-white'>Show</button>
    </>
  )
}

export default ImageMap