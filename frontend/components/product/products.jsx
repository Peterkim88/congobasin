import React from 'react';
import { Link } from 'react-router-dom';
import NavFooter from '../footer/footer';

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
        // const imageUrl = product.image_url
        // const productImage = window.${imageUrl}
        // console.log(imageUrl)
        // console.log(productImage)
        const imageUrl = product.image_url
        // console.log(product.image_url)
        // console.log(imageUrl)
        return (
          <div key={`products-${product.id}`}>
            <br />
            <div className="products-listings-box">
              <Link to={`/products/${product.id}`} className='link-to-product'>
                <img className='products-listings-images' src={window[imageUrl]} alt='product-img' />
                  {/* <br /> */}
                <p className='products-listings-names'>
                  {product.product_name}
                </p>
                {/* <br /> */}
                  {/* {product.product_description}, */}
                <p className='products-listings-prices'>
                  ${product.product_price}
                </p>
                  {/* {product.product_category} */}
              </Link>
            </div>
            <br />
          </div>
      )}}
    );
    return(
      <div className='splash-page'>
        <div className='cb-image-box'>
          <img className='cb-image' src={window.congoBasinScenaryURL} alt="background-image" />
        </div>
        <div className='products-body'>
          <div className='products-body'>
            {products}
          </div>
          {/* <div className="footer2">
            <NavFooter />
          </div> */}
        </div>
      </div>
    )
  }
}

export default Products;