import React, { useReducer, useState } from 'react';

const initialTodos = [
  { text: 'Master useReducer', completed: false }
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.payload, completed: false }];
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.payload);
    case 'UPDATE_TODO':
      return state.map((todo, index) => 
        index === action.payload.index ? { ...todo, text: action.payload.text } : todo
      );
    // Not explicitly in requirements but useful to have:
    case 'TOGGLE_TODO':
      return state.map((todo, index) => 
        index === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

const TodoCRUD = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editIndex !== null) {
      dispatch({ type: 'UPDATE_TODO', payload: { index: editIndex, text: inputValue } });
      setEditIndex(null);
    } else {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
    }
    setInputValue('');
  };

  const handleEdit = (index, text) => {
    setInputValue(text);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (editIndex === index) {
      setEditIndex(null);
      setInputValue('');
    }
    dispatch({ type: 'DELETE_TODO', payload: index });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="p-8 bg-white rounded-2xl shadow-xl border border-slate-100">
        <h2 className="text-3xl font-bold mb-6 text-emerald-600">Task 3: Todo CRUD</h2>
        
        <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-5 py-3 rounded-xl border-2 focus:ring-4 focus:ring-emerald-500/30 outline-none transition text-lg bg-slate-50 focus:border-emerald-500"
          />
          <button 
            type="submit"
            className={`px-8 py-3 text-white rounded-xl shadow-lg font-bold transition text-lg whitespace-nowrap ${editIndex !== null ? 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/30' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/30'}`}
          >
            {editIndex !== null ? 'Update Todo' : 'Add Todo'}
          </button>
        </form>

        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-400 text-lg italic">No tasks found. Yay! 🎉</p>
            </div>
          ) : (
            todos.map((todo, index) => (
              <div key={index} className={`flex items-center justify-between p-4 rounded-xl border transition group ${todo.completed ? 'bg-slate-50 border-slate-200 opacity-60' : 'bg-white border-slate-200 hover:border-emerald-300 shadow-sm'}`}>
                <div className="flex items-center gap-3 overflow-hidden">
                   <button 
                     onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: index })}
                     className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${todo.completed ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300 hover:border-emerald-400'}`}
                   >
                     {todo.completed && (
                       <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                     )}
                   </button>
                   <span className={`text-lg font-medium truncate ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                     {todo.text}
                   </span>
                </div>
                
                <div className="flex gap-2 flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => handleEdit(index, todo.text)}
                    className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition"
                    title="Edit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => handleDelete(index)}
                    className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition"
                    title="Delete"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCRUD;
