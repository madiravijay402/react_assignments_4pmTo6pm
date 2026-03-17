import React, { useState } from 'react';

const TextInput = () => {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    }
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Text Input Mirror</h2>
        <div>
            <input 
              type="text" 
              placeholder="Type something..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all mb-4"
              onChange={handleChange}
            />
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 min-h-[60px] flex items-center justify-center border border-indigo-100">
            <p className={`text-center font-medium ${input ? 'text-indigo-900' : 'text-indigo-300 italic'}`}>
                {input || "Start typing to see magic..."}
            </p>
        </div>
    </div>
  )
}

export default TextInput;