import React from 'react'

export default function Student({ data }) {
  return (
    <div className="bg-red-500 p-10 flex justify-center gap-6 flex-wrap">
      {data.map((val) => (
        <div
          key={val.name}
          className="bg-white/90 rounded-lg px-4 py-3 text-center min-w-40"
        >
          <h2 className="font-bold">{val.name}</h2>
          <h3 className="font-semibold">{val.TotalMarks}</h3>
        </div>
      ))}
    </div>
  )
}