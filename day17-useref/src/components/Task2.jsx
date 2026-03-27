import React, { useRef } from 'react'

const Task2 = () => {
    const CountRef = useRef(0);
    const showRef = useRef(null);
    
    const handlechange = () => {
        CountRef.current += 1;
        console.log("count:", CountRef.current);
        if(showRef.current) {
            showRef.current.innerText = CountRef.current;
            showRef.current.classList.remove('scale-100');
            showRef.current.classList.add('scale-125', 'text-rose-600');
            setTimeout(() => {
                if(showRef.current) {
                    showRef.current.classList.remove('scale-125', 'text-rose-600');
                    showRef.current.classList.add('scale-100', 'text-slate-700');
                }
            }, 150);
        }
    }
    
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-8 items-center transform transition-all hover:scale-[1.02]">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Persisted Counter</h2>
        <p className="text-sm text-slate-500">Value retained using useRef without re-rendering</p>
      </div>
      
      <div className="h-24 w-24 flex items-center justify-center rounded-full bg-rose-50 border-4 border-rose-100 shadow-inner">
          <p ref={showRef} className="text-4xl font-black text-slate-700 transition-all duration-200 transform scale-100">0</p>
      </div>
      
      <button 
        onClick={handlechange} 
        className="w-full py-3 px-6 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold rounded-xl shadow-lg shadow-rose-500/30 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
      >
        <span>Increase Count</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default Task2