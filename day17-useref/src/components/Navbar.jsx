import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Task 1', path: '/' },
    { name: 'Task 2', path: '/task2' },
    { name: 'Task 3', path: '/task3' },
    { name: 'Task 4', path: '/task4' },
  ];

  return (
    <>
      <nav className="bg-slate-900 shadow-md sticky top-0 z-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            <div className="flex-1 flex justify-center items-center">
              <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                day26-assignment useRef
              </h1>
            </div>
            
            <div className="w-10"></div> {/* Spacer to keep heading centered */}
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 transition-opacity" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Side Menu Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 transform bg-slate-800 w-64 h-full shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-slate-900 border-b border-slate-700">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button onClick={closeMenu} className="text-slate-300 hover:text-white" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-2 py-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive 
                    ? 'bg-teal-500/10 text-teal-400 border-l-4 border-teal-500' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white border-l-4 border-transparent'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
