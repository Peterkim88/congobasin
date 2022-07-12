import React from 'react';
import Reviews from '../review/reviews_container';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LogInFormContainer from '../session_form/login_form_container';
import ReviewsContainer from '../review/reviews_container';

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quantityToAdd: 1
    };
    this.quantityToAdd = this.quantityToAdd.bind(this)
  }

  componentDidMount(){
    // debugger
    this.props.showOneProduct(this.props.match.params.id);
    this.props.showAllItems(this.props.userId)
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

  quantityToAdd(){
    const handleQuantity = event => {
      const newQuantity = event.target.value
      // console.log(newQuantity)
      return this.setState({
        quantityToAdd: newQuantity
      })
    }
    return(
      <div className='quantity-to-add'>
        Qty:
        <input 
          type="number"
          onChange={handleQuantity} 
          defaultValue={this.state.quantityToAdd} 
          className='quantity-to-add-input' />
      </div>
    )
  }

  addItemToCart(){
    const userId = this.props.userId;
    const item = {
      user_id: userId,
      product_id: this.props.productId,
      quantity: this.state.quantityToAdd
    }
    if (userId){
      return(
        <button onClick={() => this.props.createItem(userId, item)}>
          Add to Cart
        </button>
      )
    } else {
      return(
        <Link to="/login" className="login-from-add-to-cart">
          <button>
            Add to Cart
          </button>
        </Link>
      )
    }
  }

  render(){
    // debugger
    const product = this.props.selectedProduct;
    const imageUrl = product.image_url
    // debugger
    if (!product){
      return null;
    }
    return(
      <div>
        <br />
        <br />
        <br />
        <div className='product-section'>
          <div className='product-image-box'>
            <img className='product-image' src={window[imageUrl]} alt='product-img' />
          </div>
          <br />
          <div key={`product-${product.id}`} className='product-info'>
            <div className='product-name'>
              {product.product_name},
            </div>
            <br />
            <div className='product-reviews-info' key={`reviews-${product.id}`}>
              {/* <div className='product-reviews-stars'>
                star rating
                <br />
              </div> */}
              <HashLink to={`/products/${product.id}#reviews`}>
                <button>
                  Reviews
                </button>
              </HashLink>
            </div>
            <br />
            <br />
            <div className='product-price' key={`price-${product.id}`}>
              ${product.product_price}
            </div>
            <div key={`free-returns-${product.id}`}>
              {'& FREE Returns'}
            </div>
            <br />
            <br />
            <div className='product-description' key={`product-description-${product.id}`}>
              Description:
              <br />
              {product.product_description},
            </div>
            <br />
            <div className='product-category' key={`product-category-${product.id}`}>
              Category: {product.product_category}
            </div>
          </div>

          <div className='product-add-to-cart' key={`add-to-cart-${product.id}`}>
            <div className='product-add-to-cart-border' key={`add-to-cart-border-${product.id}`}>
              <div className='product-price'>
                ${product.product_price}
              </div>
              <div>
                {'& FREE Returns'}
              </div>
              <br />
              <br />
              <div>
                {this.quantityToAdd()}
              </div>
              {/* <br /> */}
              <div>
                {this.addItemToCart()}
              </div>
            </div>
          </div>
        </div>
        <div id="reviews" className='product-review-section' key={`all-reviews-${product.id}`}>
          <ReviewsContainer />
        </div>
      </div>
    )
  }
}

export default Product;