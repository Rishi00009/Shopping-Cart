// Button.jsx
import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';

const Button = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const [buttonText, setButtonText] = React.useState('Add to Cart');

  const handleClick = () => {
    if (buttonText === 'Add to Cart') {
      addToCart(product);
      setButtonText('Remove from Cart');
    } else {
      removeFromCart(product);
      setButtonText('Add to Cart');
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default Button;