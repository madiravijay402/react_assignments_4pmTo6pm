import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/auth/Dashboard';

import Task1Alert from './pages/hoc/Task1Alert';
import Task2Text from './pages/hoc/Task2Text';
import Task3Disable from './pages/hoc/Task3Disable';
import Task4Logger from './pages/hoc/Task4Logger';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* HOC Routes */}
        <Route path="/hoc/task1" element={<Task1Alert />} />
        <Route path="/hoc/task2" element={<Task2Text />} />
        <Route path="/hoc/task3" element={<Task3Disable />} />
        <Route path="/hoc/task4" element={<Task4Logger />} />
      </Routes>
    </Router>
  );
};

export default App;