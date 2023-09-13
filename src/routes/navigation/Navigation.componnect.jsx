import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/User.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
import Logo from '../../assets/logo.png';
import CartIcon from '../../component/cart-icon/CartIcon.component';
import CartDropDown from '../../component/cart-dropdown/CartDropDown.component';
import { ProductsContext } from '../../context/Products.context';
import { CartContext } from '../../context/Cart.context';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { products } = useContext(ProductsContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img class="logo" src={Logo} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      {isCartOpen && <CartDropDown></CartDropDown>}
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;
