import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './routes/navigation/Navigation.componnect';
import Home from './routes/home/Home.component';
import SignIn from './routes/sign-in/SignIn.component';
import Shop from './routes/shop/Shop.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
