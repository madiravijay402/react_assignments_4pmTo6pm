import React, { useState } from 'react'

const User = () => {
  const [user, setUser] = useState({
    name: "Vijay",
    age: 22
  })

  const updateAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1
    }))
  }

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={updateAge}>Increase Age</button>
    </div>
  )
}

export default User