import React from 'react';
import Reviews from '../review/reviews';
import ReviewsContainer from '../review/reviews_container';

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    // debugger
    this.props.showOneProduct(this.props.match.params.id);
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
    // debugger
    const product = this.props.selectedProduct;
    // debugger
    if (!product){
      return null;
    }
    return(
      <div className='product-div'>
        <div className='product-image-box'>
          <img className='product-image' src={window.noImageURL} alt='product-img' />
        </div>
        <div key={`product-${product.id}`} className='product-info'>
          <div className='product-name'>
            {product.product_name},
          </div>
          <div className='product-description'>
            Description:
            <br />
            {product.product_description},
          </div>
          <div className='product-price'>
            {product.product_price},
          </div>
          <div className='product-category'>
            {product.product_category}
          </div>
          <Reviews/>
        </div>
      </div>
    )
  }
}

export default Product;