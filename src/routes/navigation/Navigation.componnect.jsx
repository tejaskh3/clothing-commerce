import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/shop">
            SingIn
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navigation;
