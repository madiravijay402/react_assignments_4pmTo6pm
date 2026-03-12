import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const users = [
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "David", role: "Tester" },
    { id: 3, name: "Sam", role: "Designer" }
  ];

  return (
    <>
        <div>
        <h1>User List</h1>
        {users.map((usr)=>(
            <div key={usr.id}><Link to={`/user/${usr.id}`}>{usr.name}</Link></div>
        ))}
        </div>
    </>
  )
}

export default Home