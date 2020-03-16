import React , { Component } from 'react';

import AppContext from './AppContext';

import Service from '../config/Service';

import productSeed from '../components/products/productsSeed';

class ContextProvider extends Component {
  constructor (props) {
    super(props)
    this.service = Service;
    this.state = {
      isAuthenticated : false,
      currentUser : null,
      currentProduct : null,
      darkOverlay : false,
      cart : [],
      totalPrice : 0,
    };
  };

  componentDidMount () {
    this.getCurrentUser();
    this.getCurrentCart();
  };

  authenticate = (user) => {
    this.setState({
      isAuthenticated : true,
      currentUser : user,
    });
    this.getCurrentCart();
    console.log('authenticated');
  };

  logout = () => {
    this.service.post('/auth/logout')
    .then(response => {
      this.setState({
        isAuthenticated : false,
        currentUser : null,
        cart : [],
      });
      console.log('loggedOut')
    })
    .catch(err => {
      console.log(err);
    });
  };

  getCurrentUser = () => {
    this.service.get('/auth/current-user')
    .then(response => {
      response.data ?
      this.authenticate(response.data)
      :
      this.setState({
        isAuthenticated : false,
        currentUser : null,
      });
    });
  };

  getCurrentProduct = () => {
    const url = new URL(window.location.href);
    const queryString = url.searchParams;
    const currentProductId = queryString.get('product');

    const currentProduct = productSeed.filter(product => {
      return `${product._id}` === currentProductId;
    })[0];

    if (this.state.currentProduct !== currentProduct) {
      this.setState({
        currentProduct : currentProduct,
      });
    };
  };

  getCurrentCart = () => {
    this.service.get('/cart/current-cart')
    .then(result => {
      this.setState({
        cart : result.data,
      });
      this.getTotalCartPrice();
    })
    .catch(err => {
      console.log(err.response.data);
    });
  };

  addToCart = (product) => {
    this.service.post('/cart/add', {
      product,
    })
    .then(result => {
      this.setState({
        cart : result.data,
      });
    })
    .catch(err => {
      console.log(err.response.data);
    });
  };

  clearCart = () => {
    this.service.post('/cart/clear')
    .then( result => {
      this.setState({
        cart : [],
      });
      this.getTotalCartPrice()
    })
    .catch(err => {
      console.log(err.response);
    })
  };

  getTotalCartPrice = () => {
    let totalPrice = 0;
    this.state.cart.map(item => {
      totalPrice += item.price;
    })
    this.setState({
      totalPrice,
    });
  };

  render () {
    const contextValues = {
      state : this.state,
      authenticate : this.authenticate,
      logout : this.logout,
      getCurrentProduct : this.getCurrentProduct,
      addToCart : this.addToCart,
      clearCart : this.clearCart,
      getTotalCartPrice : this.getTotalCartPrice,
    };
    
    return (
      <AppContext.Provider value={contextValues}>
        {this.props.children}
      </AppContext.Provider>
    );
  };
};

export default ContextProvider;