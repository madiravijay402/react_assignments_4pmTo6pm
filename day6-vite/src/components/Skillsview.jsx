import React from 'react'

const Skillsview = ({data}) => {
  return (
   <>
   <div className='bg-red-500 p-10 flex justify-center gap-6 flex-wrap'>
   {data.map((val)=>(
    <div key={val.name}>
        <h2>{val.name}</h2>
        <ul>
            {val.skills.map((skill)=>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
    </div>
   ))}
   </div>
   </>
  )
}

export default Skillsview