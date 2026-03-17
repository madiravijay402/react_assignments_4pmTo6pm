import React, { useState } from 'react';

const UpdateName = () => {
    const store = [{name:"ram"}, {name:"praveen"}, {name:"havi"}];
    const [index, setIndex] = useState(0);
    const [update, setUpdate] = useState({name:"vijay", age:22});

    const changeName = () => {
       const nextIndex = (index + 1) % store.length;
       setIndex(nextIndex);
       setUpdate({
         ...update,
         name: store[nextIndex].name
       });
    }
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
        <div className="bg-gray-50 rounded-xl p-4 flex-1 flex flex-col justify-center border border-gray-100">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Name</span>
                <span className="text-lg font-bold text-gray-900 capitalize">{update.name}</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Age</span>
                <span className="text-lg font-bold text-gray-900">{update.age}</span>
            </div>
        </div>
        <button 
            onClick={changeName} 
            className="mt-4 w-full py-2.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors font-medium border border-indigo-100"
        >
            Next Name
        </button>
    </div>
  )
}

export default UpdateName;