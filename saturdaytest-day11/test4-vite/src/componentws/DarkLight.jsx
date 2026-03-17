import React, { useState } from 'react';

const DarkLight = () => {
    const [toggle, setToggle] = useState(false);

    const change = () => {
        setToggle(!toggle);
    }
  return (
    <div className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 flex flex-col items-center justify-center min-h-[220px] ${toggle ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className={`text-5xl mb-6 ${toggle ? 'text-yellow-400' : 'text-gray-400'}`}>
            {toggle ? '🌙' : '☀️'}
        </div>
        <button 
            onClick={change} 
            className={`px-6 py-2.5 rounded-full font-medium transition-all shadow-sm ${toggle ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700' : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-200'}`}
        >
            Switch to {toggle ? "Light" : "Dark"}
        </button>
    </div>
  )
}

export default DarkLight;