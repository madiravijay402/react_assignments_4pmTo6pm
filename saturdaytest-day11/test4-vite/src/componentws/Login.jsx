import React, { useState } from 'react';

const Login = () => {
    const [lgn, setLgn] = useState(false);
    const change = () => {
        setLgn(!lgn);
    }
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-between min-h-[220px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Auth Status</h2>
        <div className="my-4 flex flex-col items-center justify-center flex-1">
            <div className={`w-16 h-16 rounded-full mb-3 flex items-center justify-center ${lgn ? 'bg-rose-100 text-rose-500' : 'bg-emerald-100 text-emerald-500'}`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <p className="text-lg font-medium text-gray-700">{lgn ? "Please Login" : "Welcome Back!"}</p>
        </div>
        <button 
            onClick={change} 
            className={`w-full py-2.5 rounded-lg font-medium transition-colors ${lgn ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
            {lgn ? "Login" : "Logout"}
        </button>
    </div>
  )
}

export default Login;