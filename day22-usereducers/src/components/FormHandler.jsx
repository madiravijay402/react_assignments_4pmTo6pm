import React, { useReducer } from 'react';

const initialFormState = {
  name: '',
  email: '',
  password: ''
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case 'RESET_FORM':
      return initialFormState;
    default:
      return state;
  }
}

const FormHandler = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', state);
    alert(`Form Submitted!\nName: ${state.name}\nEmail: ${state.email}`);
    dispatch({ type: 'RESET_FORM' }); // Reset after sumitting
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-100 mb-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Task 2: Form Handling</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Name</label>
            <input 
              type="text" 
              name="name"
              value={state.name} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-indigo-500/30 outline-none transition bg-slate-50 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              value={state.email} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-indigo-500/30 outline-none transition bg-slate-50 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              value={state.password} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-xl border-2 focus:ring-4 focus:ring-indigo-500/30 outline-none transition bg-slate-50 focus:border-indigo-500"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full mt-2 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-600/30 font-bold text-lg transition"
          >
            Submit & Reset Form
          </button>
        </form>
      </div>

      <div className="p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800">
        <h3 className="font-semibold text-slate-300 mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          Live Reducer State
        </h3>
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default FormHandler;
