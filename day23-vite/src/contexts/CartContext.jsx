import { createContext, useReducer, useContext } from 'react';
import { cartReducer } from '../reducers/cartReducer';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initialState = {
    items: [],
    totalPrice: 0
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItemCount: cartCount,
      cartItems: state.items, 
      totalPrice: state.totalPrice,
      addItem, 
      removeItem, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};
