import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation.componnect';
import Home from './routes/home/Home.component';
import Shop from './routes/shop/Shop.component';
import Authentication from './routes/auth/Atuhentication.component';
import Checkout from './routes/checkout/Checkout.component';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Authentication/>} />
        <Route path="checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  );
};

export default App;
