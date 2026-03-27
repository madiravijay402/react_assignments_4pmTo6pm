import React, { useRef } from 'react'

const Task4 = () => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const value = inputRef.current.value;
    if(value) {
      alert(`Searching for: ${value}`);
      inputRef.current.value = "";
    }
  };
  
  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-6 items-center">
      <div className="text-center space-y-2 mb-2">
        <h2 className="text-2xl font-bold text-slate-800">Global Search</h2>
        <p className="text-sm text-slate-500">Accessing input value instantly with useRef</p>
      </div>
      
      <div className="w-full relative flex items-center">
        <div className="absolute left-4 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <input
          ref={inputRef}
          type="text"
          placeholder="Search anything..."
          className="w-full bg-slate-50 text-slate-800 rounded-full py-4 pl-12 pr-32 border-2 border-transparent focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 shadow-inner"
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        
        <button 
          onClick={handleSearch}
          className="absolute right-2 top-2 bottom-2 bg-slate-900 hover:bg-slate-800 text-white px-6 rounded-full font-semibold shadow-md active:scale-95 transition-all duration-200"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Task4