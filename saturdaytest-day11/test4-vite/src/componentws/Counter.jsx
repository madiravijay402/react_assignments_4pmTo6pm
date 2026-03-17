import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-between min-h-[220px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Counter</h2>
        <div className="text-5xl font-bold text-indigo-600 my-4">
            {count}
        </div>
        <div className="flex gap-2 w-full justify-center">
            <button onClick={decrease} className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">-</button>
            <button onClick={reset} className="flex-1 px-4 py-2 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors font-medium">Reset</button>
            <button onClick={increase} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">+</button>
        </div>
    </div>
  )
}

export default Counter;