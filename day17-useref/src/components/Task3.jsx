import React, { useRef, useState } from 'react'

const Task3 = () => {
  const nameRef = useRef(null);
  const messageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const message = messageRef.current.value;

    if (!name || !message) return;

    console.log("Name:", name);
    console.log("Message:", message);

    nameRef.current.value = "";
    messageRef.current.value = "";
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">Contact Form</h2>
        <p className="text-sm text-slate-500">Uncontrolled inputs using useRef</p>
      </div>
        
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-600 ml-1">Full Name</label>
          <input
            ref={nameRef}
            type="text"
            placeholder="John Doe"
            className="w-full bg-slate-50 text-slate-800 rounded-xl p-3 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-semibold text-slate-600 ml-1">Your Message</label>
          <textarea
            ref={messageRef}
            placeholder="How can we help you?"
            rows={4}
            className="w-full bg-slate-50 text-slate-800 rounded-xl p-3 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full group relative flex items-center justify-center overflow-hidden rounded-xl bg-indigo-600 py-3 px-6 text-white font-bold shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:bg-indigo-700 active:scale-95"
        >
          {submitted ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Sent Successfully!
            </span>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </form>
    </div>
  )
}

export default Task3