import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/User.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
const Navigation = () => {
  const { currentUser, setCurrentUser} = useContext(UserContext);
  const signOutHandler = async () =>{
    await signOutUser();
    setCurrentUser(null);

  }
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>LOGO</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;
