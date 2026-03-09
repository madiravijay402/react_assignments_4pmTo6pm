import React from 'react'
import EmployeeCard from './EmployeeCard'

export default function EmployeeList() {
  const employees = [
    { name: 'Ravi Kumar', role: 'Frontend Developer', location: 'Chennai' },
    { name: 'Ananya Sharma', role: 'Backend Developer', location: 'Bengaluru' },
    { name: 'Imran Ali', role: 'Full Stack Developer', location: 'Hyderabad' },
  ]

  return (
    <div className="bg-slate-100 p-6 flex flex-wrap gap-4 justify-center">
      {employees.map((emp) => (
        <EmployeeCard key={emp.name} employee={emp} />
      ))}
    </div>
  )
}

