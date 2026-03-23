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
      <div>
        {info.map((u) => (
          <div key={u.id}>
            <div>
              <img src={u.image} alt={u.name} width="200" />
            </div>
            <div>{u.name}</div>
          </div>
        ))}
      </div>

      <button onClick={fetchData}>Click</button>
    </>
  )
}

export default ImageMap