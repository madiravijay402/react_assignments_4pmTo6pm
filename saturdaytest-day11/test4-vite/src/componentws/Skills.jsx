import React, { useState } from 'react'

const Skills = () => {
    const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);

  const addSkill = () => {
    setSkills([...skills, "React"]);
  };

  return (
    <div>
      <h2>Skills:</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Skills