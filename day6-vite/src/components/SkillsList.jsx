import React from 'react'
import Skillsview from './Skillsview'

export default function SkillsList() {
  const developers = [
    {
      name: 'John',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Alice',
      skills: ['React', 'Node.js', 'MongoDB'],
    },
    {
      name: 'David',
      skills: ['Java', 'Spring', 'MySQL'],
    },
  ]

  return <Skillsview data={developers} />
}