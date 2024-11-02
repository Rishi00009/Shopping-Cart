import React from 'react';
import { CartProvider } from './Cartcontext';
import Home from './home';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      {typeof window !== 'undefined' ? (
        <Home />
      ) : (
        <div>Loading...</div>
      )}
    </CartProvider>
  );
};

export default App;