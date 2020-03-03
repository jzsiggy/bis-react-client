import React , { Component } from 'react';

// import { Service } from '../../../config/Service';
import productsSeed from '../productsSeed';
import CategoryThumb from './categories/CategoryThumb';
import { Banner } from './styles';
import AppContext from '../../../context/AppContext';

class ProductList extends Component {

  state = {
    products : productsSeed,
    categories : [
      'Flower',
      'Concentrates',
      'Concentrates',
    ],
  };

  // getAllProducts = async () => {
  //   const allProducts = await Service.get('/products');
  //   this.setState({
  //     products : allProducts.data,
  //   });
  // };

  // async componentDidMount () {
  //   await this.getAllProducts();
  // };

  componentDidUpdate () {
    this.context.getCurrentProduct();
  };

  componentDidMount () {
    this.context.getCurrentProduct();
  };

  render () {
    return (
      <React.Fragment>
        <Banner/>
        {
          this.state.categories.map((category, index) => {
            const products = this.state.products.filter(product => {
              return product.category.includes(category);
            });
            return <CategoryThumb key={index} products={products} category={category}/>
          })
        }
      </React.Fragment>
    );
  };
};

ProductList.contextType = AppContext;

export default ProductList;
