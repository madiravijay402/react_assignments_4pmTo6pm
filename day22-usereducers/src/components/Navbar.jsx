import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-sky-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-16 w-full">
          <div className="font-bold text-xl tracking-tight hidden md:block">Day 22 useReducer</div>
          <div className="flex space-x-2 md:space-x-4 w-full md:w-auto justify-between md:justify-end">
            <NavLink to="/" className={({isActive}) => isActive ? "bg-sky-900 px-3 py-2 rounded-md font-medium" : "hover:bg-sky-600 px-3 py-2 rounded-md font-medium transition"}>
              Task 1 (Counter)
            </NavLink>
            <NavLink to="/task2" className={({isActive}) => isActive ? "bg-sky-900 px-3 py-2 rounded-md font-medium" : "hover:bg-sky-600 px-3 py-2 rounded-md font-medium transition"}>
              Task 2 (Form)
            </NavLink>
            <NavLink to="/task3" className={({isActive}) => isActive ? "bg-sky-900 px-3 py-2 rounded-md font-medium" : "hover:bg-sky-600 px-3 py-2 rounded-md font-medium transition"}>
              Task 3 (Todo)
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
