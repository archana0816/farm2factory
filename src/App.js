import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './HomeModule/Home';
import Login from './LoginModule/Login';
import BuyerCombine from './BuyerModule/BuyerCombine';
import Register from './LoginModule/Register';
import ProductPage from './DetailsModule/ProductPage';
import { CartProvider } from './CartModule/CartContext';
import CartModal from './CartModule/CartModal';
import Aboutus from './AboutModule/Aboutus';
import Profile from './ProfileModule/Profile';
import AdminCombined from './Admin Module/AdminCombined';
import Seller from './SellerModule/Seller';
import SellerProfile from './SellerModule/SellerProfile';
function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path='/home' element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path='/profile' element = {<Profile />}/>
        <Route path = "/buyerCombine" element = {<BuyerCombine />}/>
        <Route path = "/register" element = {<Register />}/>
        <Route path = "/product/:productId" element = {<ProductPage/>} />
        <Route path = "/cartmodal" element = {<CartModal/>} />
        <Route path='/aboutus' element = {<Aboutus/>} />
        <Route path='/admin' element = {<AdminCombined />} />
        <Route path='/seller' element ={<Seller/>}/>
        <Route path='/sellerprofile' element = {<SellerProfile />}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
