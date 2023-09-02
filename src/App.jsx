import Home from './routes/home/Home.component';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation.componnect';
import SignIn from './routes/sign-in/SignIn.component';
const Shop = () => {
  return <h1>I am the shop</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route shop path='shop' element={<Shop/>} />
        <Route shop path='sign-in' element={<SignIn/>} />
      </Route>
    </Routes>
  );
};

export default App;
