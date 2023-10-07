import Button from '../button/Button.component'
import './CartDropDown.styles.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/Cart.context';
import CartItem from '../cart-item/CartItem.component';


const CartDropdown = () => {
  const { cartItems,setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(false);
    
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
