import React , { Component } from "react";
import { 
  Container, 
  ProductContainer, 
  CheckoutBar,
  CartItem,
  CartItemName,
  CartItemPrice,
} from './styles';

import Product from '../../products/menu/categories/product/Product';
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";

class ProductListContainer extends Component {

  render () {
    return (
      <React.Fragment>
        <CheckoutBar>
        {
          this.props.products.map((item, index) => {
            return (
              <CartItem key={index}>
                <CartItemName>{item.name}</CartItemName>
                <CartItemPrice>${item.price}</CartItemPrice>
              </CartItem>
            )
          })
        }
          <CartItem>
            <CartItemName>Total</CartItemName>
            <CartItemPrice>${this.context.state.totalPrice}</CartItemPrice>
          </CartItem>
          {
            this.props.products.length ?
              <Link to={'/checkout/order/114563'}>Proceed to Checkout</Link>
            :
              ''
          }

        </CheckoutBar>
        <Container>
        {
          this.props.products.map((item, index) => {
            return (
              <ProductContainer key={index}>
                <Product product={item} />
              </ProductContainer>
            )
          })
        }
        </Container>
      </React.Fragment>
    );
  };
};

ProductListContainer.contextType = AppContext;

export default ProductListContainer;