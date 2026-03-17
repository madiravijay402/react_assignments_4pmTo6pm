import React, { useState } from 'react';

const OddEven = () => {
    const [count, setCount] = useState(0);
    const isEven = count % 2 === 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between items-center min-h-[220px]">
      <h2 className="text-xl font-semibold text-gray-800 w-full text-left mb-2">Odd/Even Checker</h2>
      
      <div className="flex flex-col items-center justify-center flex-1 my-2">
          <h2 className="text-4xl font-black text-gray-900 mb-2">{count}</h2>
          <span className={`px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider ${isEven ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
            {isEven ? "Even" : "Odd"}
          </span>
      </div>

      <button 
        onClick={() => setCount(count + 1)}
        className="w-full py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium shadow-sm"
      >
        Increase Number
      </button>
    </div>
  )
}

export default OddEven;