import React from 'react';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
    this.renderErrors = this.renderErrors.bind(this);
  };

  componentDidMount(){
    this.props.showAllProducts()
      // .then(response => response.json())
      // .then(allProducts => this.setState(allProducts))
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  
  render(){
    const products = Object.values(this.props.allProducts).map((product) => {
      if (product.product_quantity !== 0){
        return (
          <div key={`products-${product.id}`}>
            <Link to={`/products/${product.id}`}>
              <img className='products-image' src={window.noImageURL} alt='product-img' />
              {product.product_name}
            </Link>
              {/* {product.product_description}, */}
              {product.product_price}
              {/* {product.product_category} */}
          </div>
      )}}
    );
    return(
      <div>
        <ul>
          {products}
        </ul>
      </div>
    )
  }
}

export default Products;