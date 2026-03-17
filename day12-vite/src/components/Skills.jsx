import React, { useState } from 'react'

const Skills = () => {
  const [skill, setSkill] = useState("")

  const add = () => {
    console.log(skill) // just to see value
  }

  return (
    <div>
      <input 
        type="text" 
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button onClick={add}>add</button>

      <h2>skills</h2>

      <p>{skill}</p>
    </div>
  )
}

export default Skills