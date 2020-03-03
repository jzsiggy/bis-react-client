import React , { Component } from 'react';
import AppContext from '../../context/AppContext';

import { CartContainer , Title } from './styles';
import ProductListContainer from './productListContainer/ProductListContainer';

class Cart extends Component {
  // componentDidMount = async () => {
  //   !this.context.state.currentUser &&
  //   this.props.history.push('/');
  // };

  render () {
    return (
      <CartContainer>
        <Title>
          <h1>Your Cart</h1>
          <button onClick={this.context.clearCart}>CLEAR</button>
        </Title>
        <ProductListContainer products={this.context.state.cart}/>
      </CartContainer>
    );
  };
};

Cart.contextType = AppContext;

export default Cart;