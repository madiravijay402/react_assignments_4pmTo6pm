import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeavySum from './components/HeavySum';
import ArrayFilter from './components/ArrayFilter';
import PrimeChecker from './components/PrimeChecker';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4 md:p-8">
          <div className="flex justify-end mb-6">
             <button onClick={toggleTheme} className="px-4 py-2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 rounded-lg shadow-md hover:bg-slate-700 dark:hover:bg-slate-300 transition font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               Toggle Theme ({theme})
             </button>
          </div>
          <Routes>
            <Route path="/" element={<HeavySum theme={theme} />} />
            <Route path="/task2" element={<ArrayFilter theme={theme} />} />
            <Route path="/task3" element={<PrimeChecker theme={theme} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
