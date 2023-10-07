import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { UserProvider } from './context/User.context.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductsProvider } from './context/Products.context';
import { CartProvider} from './context/Cart.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
