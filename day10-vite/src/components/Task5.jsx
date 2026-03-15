import React, { useState } from 'react'

const Task5 = () => {
  const [profile, setProfile] = useState({
    name: "Priya",
    role: "Developer",
    experience: 2
  });

  const promote = () => {
    setProfile({
      ...profile,
      role: "Senior Developer",
      experience: profile.experience + 1
    });
  };

  return (
    <div className='bg-purple-500 flex flex-col gap-5 justify-center p-5'>
        <div>
             <h2>Name: {profile.name}</h2>
      <h2>Role: {profile.role}</h2>
      <h2>Experience: {profile.experience}</h2>
        </div>
<div>
    <button onClick={promote} className='bg-blue-500 rounded-2xl p-3 '>Promote</button>
</div>
      
    </div>
  );
}

export default Task5