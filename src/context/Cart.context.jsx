import { useState, createContext } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}
});
const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { setIsCartOpen, isCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
