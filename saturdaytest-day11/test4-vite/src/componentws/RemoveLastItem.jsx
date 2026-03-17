import React, { useState } from 'react';

const RemoveLastItem = () => {
  const [items, setItems] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const removeLast = () => {
    setItems(items.slice(0, -1));
  };

  const hasItems = items.length > 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Tech Stack</h2>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-bold">{items.length} left</span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 rounded-xl p-3 border border-gray-100">
        {hasItems ? (
          <ul className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <li key={index} className="bg-white border border-gray-200 shadow-sm text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm font-medium italic">
            List is empty
          </div>
        )}
      </div>

      <button 
        onClick={removeLast} 
        disabled={!hasItems}
        className={`w-full py-2.5 rounded-lg font-medium transition-colors shadow-sm
          ${!hasItems ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-100'}`}
      >
        Remove Last Item
      </button>
    </div>
  );
}

export default RemoveLastItem;