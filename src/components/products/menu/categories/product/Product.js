import React , { Component } from 'react';

import AppContext from '../../../../../context/AppContext';

import { Image , ProductContainer , ProductName , ProductPrice } from './styles';

class Product extends Component {
  render () {
    return (
      <AppContext.Consumer>
        {
          context => {
            return (
              <ProductContainer
              to={`/menu?product=${this.props.product._id}`}
              >
                <Image imgUrl={this.props.product.imageUrl} />
                <ProductPrice>${this.props.product.price}</ProductPrice>
                <ProductName>{this.props.product.name}</ProductName>
              </ProductContainer>
            )
          }
        }
      </AppContext.Consumer>
    )
  }
};

export default Product;