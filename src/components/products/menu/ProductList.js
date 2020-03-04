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
      {
        'title' : 'Flower',
        'subtitle' : 'The best bud. Grind it up, roll it, or pack into your preferred smoking device.',
      },
      {
        'title' : 'Concentrates',
        'subtitle' : 'Stock up with a pack of prerolled joints. Enjoy ultimate convenience and remember to share the love.',
      },
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
              return product.category.includes(category.title);
            });
            return <CategoryThumb key={index} products={products} category={category.title} subtitle={category.subtitle}/>
          })
        }
      </React.Fragment>
    );
  };
};

ProductList.contextType = AppContext;

export default ProductList;
