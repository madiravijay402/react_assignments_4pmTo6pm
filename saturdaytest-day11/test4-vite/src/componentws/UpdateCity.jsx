import React, { useState } from 'react';

const UpdateCity = () => {
  const [user, setUser] = useState({
    name: "Ravi",
    role: "Developer",
    city: "Chennai"
  });

  const updateCity = () => {
    setUser({
      ...user,
      city: "Hyderabad"
    });
  };

  const isHyderabad = user.city === "Hyderabad";

  return (
   <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Location Info</h2>
      
      <div className="bg-gray-50 rounded-xl p-4 flex-1 flex flex-col justify-center gap-2 border border-gray-100">
        <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500 uppercase">Name</span>
            <span className="font-bold text-gray-900">{user.name} ({user.role})</span>
        </div>
        <div className="w-full h-px bg-gray-200 my-1"></div>
        <div className="flex justify-between items-center animate-pulse-once">
            <span className="text-sm font-medium text-gray-500 uppercase">City</span>
            <span className="font-bold text-blue-600">{user.city}</span>
        </div>
      </div>

      <button 
        onClick={updateCity} 
        disabled={isHyderabad}
        className={`mt-4 w-full py-2.5 rounded-lg font-medium transition-colors shadow-sm
          ${isHyderabad ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-100'}`}
      >
        Relocate to Hyderabad
      </button>
    </div>
  )
}

export default UpdateCity;