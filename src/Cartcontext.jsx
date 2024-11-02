// Cartcontext.jsx
import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCartCount(cartCount + 1);
    setCart({ ...cart, [product.name]: product });
  };

  const removeFromCart = (product) => {
    setCartCount(cartCount - 1);
    const newCart = { ...cart };
    delete newCart[product.name];
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cartCount, cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };