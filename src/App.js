import React from 'react';
import './App.css';

import { Route , Switch } from 'react-router-dom';


import ContextProvider from './context/ContextProvider';

import Cart from './components/cart/Cart';

import NavBar from './components/navigation/NavBar';
import LoginForm from './components/authentication/user-login/LoginForm'
import SignupForm from './components/authentication/user-signup/SignupForm'
import ProductList from './components/products/menu/ProductList';
import ProductDetail from './components/products/product-detail/ProductDetail';
import Checkout from './components/checkout/Checkout';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ProductDetail/>
        <NavBar />
        <Switch>
          <Route exact path="/" component='' />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/menu" component={ProductList} />
          <Route path="/user/cart/:id" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
