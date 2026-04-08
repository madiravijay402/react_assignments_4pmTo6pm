import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import FormHandler from './components/FormHandler';
import TodoCRUD from './components/TodoCRUD';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-5xl mx-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/task2" element={<FormHandler />} />
            <Route path="/task3" element={<TodoCRUD />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
