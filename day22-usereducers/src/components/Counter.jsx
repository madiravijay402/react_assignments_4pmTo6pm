import React, { useReducer, useState } from 'react';

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialState;
    case 'INCREMENT_BY_VALUE':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [incrementValue, setIncrementValue] = useState(5);

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 mt-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-sky-600">Task 1: Counter</h2>
      
      <div className="text-center mb-8">
        <span className="text-7xl font-black text-slate-800">{state.count}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl shadow font-semibold transition"
        >
          - Decrement
        </button>
        <button 
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow font-semibold transition"
        >
          + Increment
        </button>
      </div>
      
      <div className="flex gap-4 mb-6">
        <input 
          type="number" 
          value={incrementValue} 
          onChange={(e) => setIncrementValue(Number(e.target.value))} 
          className="flex-1 px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-sky-500/30 outline-none transition text-lg bg-slate-50 focus:border-sky-500"
        />
        <button 
          onClick={() => dispatch({ type: 'INCREMENT_BY_VALUE', payload: incrementValue })}
          className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl shadow font-semibold transition whitespace-nowrap"
        >
          Add Value
        </button>
      </div>
      
      <button 
        onClick={() => dispatch({ type: 'RESET' })}
        className="w-full px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold transition"
      >
        Reset to Initial
      </button>
      
      <div className="mt-8 p-4 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-sm">
         <p><strong>Actions Used:</strong> <code>INCREMENT</code>, <code>DECREMENT</code>, <code>RESET</code>, <code>INCREMENT_BY_VALUE</code>.</p>
         <p>Handled by a single reducer function!</p>
      </div>
    </div>
  );
};

export default Counter;
