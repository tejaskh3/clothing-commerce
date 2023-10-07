import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import React, { useContext } from 'react';
import { CartContext } from '../../context/Cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);

  const toggleCart = () =>{
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
