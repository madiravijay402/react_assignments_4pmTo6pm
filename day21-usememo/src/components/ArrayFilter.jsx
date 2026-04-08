import React, { useState, useMemo } from 'react';

// Generates an array of 10,000 random numbers
const generateLargeArray = () => {
  return Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000));
};

const ArrayFilter = ({ theme }) => {
  const [array, setArray] = useState(generateLargeArray);

  const regenerateArray = () => {
    setArray(generateLargeArray());
  };

  const calculationResult = useMemo(() => {
    console.log('Task 2: Heavy Array Filtering and Sum Calculation running...');
    
    // Artificial heavy delay to exaggerate array operations
    for (let i = 0; i < 40000000; i++) {}
    
    const evenNumbers = array.filter(num => num % 2 === 0);
    const sumOfEvens = evenNumbers.reduce((acc, curr) => acc + curr, 0);

    return {
      totalItems: array.length,
      evenCount: evenNumbers.length,
      sum: sumOfEvens
    };
  }, [array]);

  return (
    <div className={`p-6 rounded-2xl shadow-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} transition-all duration-300`}>
      <h2 className="text-3xl font-extrabold mb-6 text-emerald-500">Task 2: Large Array Filtering</h2>
      
      <div className="mb-8">
        <button 
          onClick={regenerateArray}
          className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-600/30 font-bold transition text-lg"
        >
          🔄 Regenerate Array (10,000 Nums)
        </button>
      </div>

      <div className={`p-6 rounded-xl shadow-inner border-t-[6px] border-emerald-500 ${theme === 'dark' ? 'bg-slate-900/80' : 'bg-emerald-50/50'}`}>
        <p className="opacity-80 text-sm mb-4 font-sans font-medium uppercase tracking-wider">Metrics Snapshot:</p>
        <ul className="space-y-4 text-xl">
          <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
             <span className="opacity-80">Total Items:</span> 
             <span className="font-bold text-slate-800 dark:text-slate-200">{calculationResult.totalItems.toLocaleString()}</span>
          </li>
          <li className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
             <span className="opacity-80">Even Numbers:</span> 
             <span className="font-bold text-slate-800 dark:text-slate-200">{calculationResult.evenCount.toLocaleString()}</span>
          </li>
          <li className="flex flex-col sm:flex-row justify-between sm:items-center pt-2">
             <span className="opacity-80 mb-2 sm:mb-0">Sum of Evens:</span> 
             <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400">{calculationResult.sum.toLocaleString()}</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-yellow-100/50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/50">
        <p className="text-sm font-medium">
          💡 <strong>Check Console:</strong> Filtering 10K numbers and summing them is memoized. Clicking "Regenerate" is slow, but toggling the theme is lightning fast!
        </p>
      </div>
    </div>
  );
};

export default ArrayFilter;
