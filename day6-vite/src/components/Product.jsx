import React from 'react'

const Product = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data.map((val) => (
        <div
          key={val.id}
          className="bg-white rounded-xl shadow p-4 flex items-center justify-between"
        >
          <div className="font-semibold text-gray-800">{val.name}</div>
          <div className="font-bold text-amber-600">
            ₹{Number(val.price).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product        