export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Check if item already exists
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let newItems;
      
      if (existingItemIndex > -1) {
        // Increment quantity
        newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
      } else {
        // Add new item
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      
      return {
        ...state,
        items: newItems,
        totalPrice: calculateTotal(newItems)
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: newItems,
        totalPrice: calculateTotal(newItems)
      };
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        totalPrice: 0
      };
      
    default:
      return state;
  }
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
