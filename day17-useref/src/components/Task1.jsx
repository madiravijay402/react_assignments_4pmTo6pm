import React, { useRef } from 'react'

const Task1 = () => {
  const inputRef = useRef(null);
  const messageRef = useRef(null);
  const timerRef = useRef(null);

  const handleTyping = () => {
    messageRef.current.innerText = "User is typing...";
    messageRef.current.className = "text-teal-600 font-medium animate-pulse";
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
      messageRef.current.innerText = "User stopped typing.";
      messageRef.current.className = "text-slate-500 font-medium transition-colors duration-300";
    }, 2000);
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-6 items-center transform transition-all hover:scale-[1.02]">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Typing Indicator</h2>
        <p className="text-sm text-slate-500">Implemented using useRef to manage timeout</p>
      </div>
      
      <div className="w-full space-y-4">
        <div className="relative group">
          <input 
            type="text" 
            ref={inputRef} 
            onChange={handleTyping} 
            placeholder="Type something..." 
            className="w-full bg-slate-50 text-slate-800 rounded-xl p-4 pl-4 border-2 border-transparent focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal-400/20 transition-all duration-300"
          />
        </div>
        <div className="h-8 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100">
          <p ref={messageRef} className="text-slate-400 italic font-medium">Waiting for input...</p>
        </div>
      </div>
    </div>
  )
}

export default Task1