import { useState } from "react";

function NumberList() {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[220px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Number Sequence</h2>
        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md text-xs font-bold">Count: {numbers.length}</span>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 rounded-xl p-3 border border-gray-100">
        <ul className="flex flex-wrap gap-2">
          {numbers.map((num, index) => (
            <li key={index} className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 shadow-sm text-gray-700 rounded-lg text-sm font-bold">
              {num}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={addNumber}
        className="w-full py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm"
      >
        Append Next Number
      </button>
    </div>
  );
}

export default NumberList;