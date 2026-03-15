import { useState } from 'react';

export default function ArrayAddSkill() {
  const [skills, setSkills] = useState(['React', 'JavaScript']);

  const allSkills = ['TypeScript', 'Node.js', 'CSS', 'HTML', 'Python', 'Tailwind', 'Next.js'];

  const addSkill = () => {
    const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)];
    if (!skills.includes(randomSkill)) {
      setSkills([...skills, randomSkill]);
    }
  };

  return (
    <div className="card">
      <h2>8. Array: Add Skill</h2>
      <ul className="list-container">
        {skills.map((skill, index) => (
          <li key={index} className="list-item">✅ {skill}</li>
        ))}
      </ul>
      <button className="btn btn-success" onClick={addSkill} style={{ marginTop: 'auto' }}>
        Add Random Skill
      </button>
    </div>
  );
}
