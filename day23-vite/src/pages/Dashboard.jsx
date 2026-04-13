import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { cartItems, totalPrice, removeItem, clearCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, {user?.name}</p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800/30 font-medium">
          Logged in ID: {user?.id}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card border border-border shadow-sm rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <ShoppingBag size={20} />
                Your Cart
              </h2>
              {cartItems.length > 0 && (
                <button 
                  onClick={clearCart}
                  className="text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 underline-offset-4 hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>
            
            <div className="divide-y divide-border">
              {cartItems.length === 0 ? (
                <div className="p-12 text-center text-gray-500 dark:text-gray-400 flex flex-col items-center">
                  <ShoppingBag size={48} className="mb-4 text-gray-300 dark:text-gray-600" />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-3xl">
                        {item.image}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-lg">${item.price * item.quantity}</span>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border border-border shadow-sm rounded-2xl p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Shipping</span>
                <span>{totalPrice > 0 ? '$10' : '$0'}</span>
              </div>
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Tax</span>
                <span>${totalPrice > 0 ? (totalPrice * 0.08).toFixed(2) : '0'}</span>
              </div>
              <div className="pt-4 border-t border-border flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice > 0 ? (totalPrice * 1.08 + 10).toFixed(2) : '0'}</span>
              </div>
            </div>
            <button 
              disabled={cartItems.length === 0}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed dark:disabled:bg-gray-700 text-white font-medium py-3 rounded-xl transition-colors shadow-sm"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
