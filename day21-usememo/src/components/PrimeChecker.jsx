import React, { useState, useMemo } from 'react';

const PrimeChecker = ({ theme }) => {
  const [number, setNumber] = useState(1);
  const [checkTrigger, setCheckTrigger] = useState(0);

  // function: input: number, output: boolean prime check
  // But: use loop up to n (heavy process)
  const isPrime = (n) => {
    console.log('Task 3: Heavy Prime Checking running for:', n);
    if (n <= 1) return false;
    
    // Artificially slow loop up to n to simulate very heavy prime processing
    for (let i = 0; i <= 30000000; i++) {}
        
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const handleCheck = () => {
    setCheckTrigger(prev => prev + 1);
  };

  // We only recalculate if checkTrigger or number changes
  const primeResult = useMemo(() => isPrime(number), [number, checkTrigger]);

  return (
    <div className={`p-6 rounded-2xl shadow-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} transition-all duration-300`}>
      <h2 className="text-3xl font-extrabold mb-6 text-rose-500">Task 3: Prime Number Checker</h2>
      
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-end w-full">
        <label className="flex flex-col flex-1 w-full">
          <span className="font-semibold mb-2 text-lg">Enter a number to check:</span>
          <input 
            type="number" 
            value={number} 
            onChange={(e) => setNumber(Number(e.target.value))} 
            className={`px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-rose-500/50 outline-none transition duration-200 text-lg font-mono ${theme === 'dark' ? 'bg-slate-700 border-slate-600 focus:border-rose-400' : 'bg-slate-50 border-slate-300 focus:border-rose-500'}`}
          />
        </label>
        <button 
          onClick={handleCheck}
          className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow-lg shadow-rose-500/30 font-bold transition w-full sm:w-auto text-lg whitespace-nowrap"
        >
          Check Prime
        </button>
      </div>

      <div className={`p-8 text-center rounded-xl border-4 shadow-inner ${primeResult ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'border-rose-500 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400'}`}>
         <div className="text-2xl font-medium tracking-wide">
             The number {number} is 
             <span className="text-5xl block font-black mt-4 uppercase">
                 {primeResult ? '🔥 Prime' : '❌ Not Prime'}
             </span>
         </div>
      </div>
      
      <div className="mt-8 p-4 rounded-lg bg-yellow-100/50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/50">
        <p className="text-sm font-medium">
          💡 <strong>Check Console:</strong> Checking for prime involves a heavy loop. Toggling the theme ignores this calculation because of <code>useMemo</code>.
        </p>
      </div>
    </div>
  );
};

export default PrimeChecker;
