import React , { Component } from 'react';

import { Title , CategoryContainer , ProductsContainer , SubTitle } from './styles';
import Product from './product/Product';

class CategoryThumb extends Component {
  render () {
    return (
      <CategoryContainer>
        <Title>{this.props.category}</Title>
        <SubTitle>{this.props.subtitle}</SubTitle>
        <ProductsContainer>
          {
            this.props.products.map((product, index) => {
              return <Product key={index} product={product}/>
            })
          }
        </ProductsContainer>
      </CategoryContainer>
    );
  };
};

export default CategoryThumb;