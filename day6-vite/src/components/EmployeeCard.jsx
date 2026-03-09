import React from 'react'

export default function EmployeeCard({ employee }) {
  const { name, role, location } = employee

  return (
    <div className="bg-white rounded-xl shadow px-4 py-3 min-w-56">
      <h2 className="font-bold text-lg text-gray-900">{name}</h2>
      <p className="text-sm text-gray-700">{role}</p>
      <p className="text-xs text-gray-500 mt-1">{location}</p>
    </div>
  )
}

