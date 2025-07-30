import React, { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';

// Acciones del carrito
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Reducer del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    }
    
    case CART_ACTIONS.INCREMENT: {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    
    case CART_ACTIONS.DECREMENT: {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
      };
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    }
    
    case CART_ACTIONS.CLEAR_CART: {
      return {
        ...state,
        items: []
      };
    }
    
    case CART_ACTIONS.LOAD_CART: {
      return {
        ...state,
        items: action.payload || []
      };
    }
    
    default:
      return state;
  }
};

// Estado inicial
const initialState = {
  items: []
};

// Crear contexto
const CartContext = createContext();

// Hook personalizado para usar el carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
};

// Formatear precio en Lempiras
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-HN', {
    style: 'currency',
    currency: 'HNL',
    minimumFractionDigits: 0
  }).format(price);
};

// Provider del carrito
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem('luam-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: CART_ACTIONS.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error('Error al cargar carrito:', error);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('luam-cart', JSON.stringify(state.items));
  }, [state.items]);

  // Funciones del carrito
  const addItem = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: product });
    toast.success(`${product.name} añadido al carrito ✅`, {
      duration: 2000,
      position: 'bottom-right'
    });
  };

  const incrementItem = (productId) => {
    dispatch({ type: CART_ACTIONS.INCREMENT, payload: productId });
  };

  const decrementItem = (productId) => {
    dispatch({ type: CART_ACTIONS.DECREMENT, payload: productId });
  };

  const removeItem = (productId) => {
    const item = state.items.find(item => item.id === productId);
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: productId });
    if (item) {
      toast.success(`${item.name} eliminado del carrito`, {
        duration: 2000,
        position: 'bottom-right'
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
    toast.success('Carrito vaciado', {
      duration: 2000,
      position: 'bottom-right'
    });
  };

  // Cálculos
  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const value = {
    items: state.items,
    addItem,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getItemSubtotal,
    formatPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;