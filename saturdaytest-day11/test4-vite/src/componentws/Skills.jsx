import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript"]);

  const addSkill = () => {
    setSkills([...skills, "React"]);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">My Skills</h2>
        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md text-xs font-bold">{skills.length} skills</span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 rounded-xl p-3 border border-gray-100">
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li key={index} className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={addSkill}
        className="w-full py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm"
      >
        Add React
      </button>
    </div>
  );
}

export default Skills;