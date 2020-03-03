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

class ProductListContainer extends Component {
  render () {
    let totalPrice = 0;
    return (
      <React.Fragment>
        <CheckoutBar>
        {
          this.props.products.map((item, index) => {
            totalPrice = totalPrice + item.price;
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
            <CartItemPrice>${totalPrice}</CartItemPrice>
          </CartItem>

          <Link to={'/checkout/order/114563'}>Proceed to Checkout</Link>

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

export default ProductListContainer;