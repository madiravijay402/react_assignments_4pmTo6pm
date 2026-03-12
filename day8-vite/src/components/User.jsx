import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const users = [
  { id: 1, name: "John", role: "Developer" },
  { id: 2, name: "Vijay", role: "Designer" },
  { id: 3, name: "Rahul", role: "Tester" }
];
const { id } = useParams();
const user=users.find((e)=>e.id===Number(id))
  return (
    <>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </>
  )
}

export default User