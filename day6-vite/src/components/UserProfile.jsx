import React from 'react'

const UserProfile = ({data}) => {
  return (
    <>
      <ul className="space-y-3">
        {data.map((val) => (
          <li
            key={val.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="font-semibold text-gray-800">{val.name}</div>
              <div className="text-sm text-gray-600">{val.age} yrs</div>
            </div>

            <div className="text-sm text-gray-600">{val.course}</div>

            <div className="flex flex-wrap gap-2">
              {val.pr?.map((skill) => (
                <span
                  key={`${val.id}-${skill}`}
                  className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserProfile