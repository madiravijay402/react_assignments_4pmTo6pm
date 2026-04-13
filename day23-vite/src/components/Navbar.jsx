import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Sun, Moon, ShoppingCart, LogOut, LogIn } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { isLoggedIn, user, logout } = useAuth();
  const { cartItemCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Minimart</span>
            </Link>
            
            <div className="hidden md:flex gap-6 font-medium text-sm">
              <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
              {isLoggedIn && (
                <Link to="/dashboard" className="hover:text-blue-500 transition-colors">Dashboard</Link>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Cart Icon */}
            <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>

            {/* Auth Button */}
            {isLoggedIn ? (
              <div className="flex items-center gap-3 ml-2 border-l border-border pl-4">
                <span className="text-sm font-medium hidden sm:block">Hi, {user?.name || 'User'}</span>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-900/50 px-3 py-1.5 rounded-md transition-colors"
                >
                  <LogOut size={16} />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="flex items-center gap-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                <LogIn size={16} />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
