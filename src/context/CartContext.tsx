import { createContext, useContext, useReducer, ReactNode } from 'react';
import { MenuItem } from '../types';

export interface CartItem {
  menuItemId: string;
  item: MenuItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: { menuItemId: string } }
  | { type: 'INCREMENT_QTY'; payload: { menuItemId: string } }
  | { type: 'DECREMENT_QTY'; payload: { menuItemId: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CART_OPEN'; payload: boolean }
  | { type: 'TOGGLE_CART' };

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addItem: (item: MenuItem) => void;
  removeItem: (menuItemId: string) => void;
  incrementQty: (menuItemId: string) => void;
  decrementQty: (menuItemId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getItemQuantity: (menuItemId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function parsePrice(priceStr: string): number {
  if (!priceStr) return 0;
  const match = priceStr.match(/\d+(\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (i) => i.menuItemId === action.payload.id
      );
      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            { menuItemId: action.payload.id, item: action.payload, quantity: 1 },
          ],
        };
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.menuItemId !== action.payload.menuItemId),
      };
    case 'INCREMENT_QTY': {
      return {
        ...state,
        items: state.items.map((i) =>
          i.menuItemId === action.payload.menuItemId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }
    case 'DECREMENT_QTY': {
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.menuItemId === action.payload.menuItemId
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_CART_OPEN':
      return { ...state, isCartOpen: action.payload };
    case 'TOGGLE_CART':
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isCartOpen: false,
  });

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, item) => sum + parsePrice(item.item.price) * item.quantity,
    0
  );

  const addItem = (item: MenuItem) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (menuItemId: string) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { menuItemId } });
  const incrementQty = (menuItemId: string) =>
    dispatch({ type: 'INCREMENT_QTY', payload: { menuItemId } });
  const decrementQty = (menuItemId: string) =>
    dispatch({ type: 'DECREMENT_QTY', payload: { menuItemId } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const openCart = () => dispatch({ type: 'SET_CART_OPEN', payload: true });
  const closeCart = () => dispatch({ type: 'SET_CART_OPEN', payload: false });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });

  const getItemQuantity = (menuItemId: string) => {
    const found = state.items.find((i) => i.menuItemId === menuItemId);
    return found ? found.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isCartOpen: state.isCartOpen,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        incrementQty,
        decrementQty,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
