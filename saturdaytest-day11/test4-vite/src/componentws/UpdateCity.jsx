import React, { useState } from 'react'

const UpdateCity = () => {
    const [user, setUser] = useState({
    name: "Ravi",
    role: "Developer",
    city: "Chennai"
  });

  const updateCity = () => {
    setUser({
      ...user,
      city: "Hyderabad"
    });
  };
  return (
   <>
        <div>
      <h2>Name: {user.name}</h2>
      <h2>Role: {user.role}</h2>
      <h2>City: {user.city}</h2>

      <button onClick={updateCity}>Update City</button>
    </div>
   </>
  )
}

export default UpdateCity