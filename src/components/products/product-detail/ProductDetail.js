import React , { Component } from 'react';

import { Modal , CloseLink , Image , AddToCartBtn } from './styles';

import AppContext from '../../../context/AppContext';
import Overlay from '../../overlay/Overlay';

class ProductDetail extends Component {

  addToCart = (e) => {
    e.preventDefault();
    this.context.addToCart(this.context.state.currentProduct);
  };

  render () {
    return (
      <AppContext.Consumer>
        {
          context => {
            return (
              context.state.currentProduct &&
              <React.Fragment>
                <Overlay/>
                <Modal>
                  <CloseLink to={'/menu'} isactive={context.state.currentProduct}/>
                  <h1>{context.state.currentProduct.name}</h1>
                  <Image imgUrl={context.state.currentProduct.imageUrl}/>
                  <AddToCartBtn onClick={this.addToCart}>Add to Cart</AddToCartBtn>
                </Modal>
              </React.Fragment>
            );
          }
        }
      </AppContext.Consumer>
    )
  };
};

ProductDetail.contextType = AppContext;

export default ProductDetail;
