import React from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();

  const users = [
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "David", role: "Tester" },
    { id: 3, name: "Sam", role: "Designer" }
  ];
  const user=users.find((u)=>u.id===Number(id))
  return (
    <>
        <div>
            <h1>User Details</h1>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
        </div>
    </>
  )
}

export default UserDetails