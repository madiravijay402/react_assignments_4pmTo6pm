import React, { useState, useMemo } from 'react';

const HeavySum = ({ theme }) => {
  const [number, setNumber] = useState(5);

  const calculateSum = (n) => {
    console.log('Task 1: Heavy Sum calculation running for:', n);
    let sum = 0;
    // Heavy loop to simulate slow processing
    for (let i = 0; i <= 50000000; i++) {
        // Just blocking time
    }
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

  const sumResult = useMemo(() => calculateSum(number), [number]);

  return (
    <div className={`p-6 rounded-2xl shadow-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} transition-all duration-300`}>
      <h2 className="text-3xl font-extrabold mb-6 text-indigo-500">Task 1: Heavy Sum Calculation</h2>
      
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-end w-full">
        <label className="flex flex-col flex-1 w-full">
          <span className="font-semibold mb-2 text-lg">Enter a number (n):</span>
          <input 
            type="number" 
            value={number} 
            onChange={(e) => setNumber(Number(e.target.value))} 
            className={`px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-indigo-500/50 outline-none transition duration-200 text-lg font-mono ${theme === 'dark' ? 'bg-slate-700 border-slate-600 focus:border-indigo-400' : 'bg-slate-50 border-slate-300 focus:border-indigo-500'}`}
          />
        </label>
        <button 
          onClick={() => setNumber(prev => prev + 1)}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-600/30 font-bold transition w-full sm:w-auto text-lg whitespace-nowrap"
        >
          Increment (+1)
        </button>
      </div>

      <div className={`p-6 rounded-xl font-mono text-lg border-l-4 border-indigo-500 shadow-inner ${theme === 'dark' ? 'bg-slate-900/80 text-indigo-200' : 'bg-indigo-50/50'}`}>
        <p className="opacity-80 text-sm mb-2 font-sans font-medium uppercase tracking-wider">Result (1 + ... + {number}):</p>
        <span className="text-5xl font-black text-indigo-600 dark:text-indigo-400 break-all">{sumResult}</span>
      </div>
      
      <div className="mt-6 p-4 rounded-lg bg-yellow-100/50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/50">
        <p className="text-sm font-medium">
          💡 <strong>Check Console:</strong> The math loop is heavy. Because of <code>useMemo</code>, recalculation ONLY happens when the number changes. Try toggling the theme—it's instant because the heavy sum calculation is skipped!
        </p>
      </div>
    </div>
  );
};

export default HeavySum;
