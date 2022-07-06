import React from 'react';
import Reviews from '../review/reviews_container';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import LogInFormContainer from '../session_form/login_form_container'

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
      <input 
        type="number"
        onChange={handleQuantity} 
        defaultValue={this.state.quantityToAdd} />
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
      <div className='product-div'>
        <div className='product-image-box'>
          <img className='product-image' src={window[imageUrl]} alt='product-img' />
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
            ${product.product_price},
          </div>
          <div className='product-category'>
            {product.product_category}
          </div>
          <div>
            {this.quantityToAdd()}
          </div>
          <div>
            {this.addItemToCart()}
          </div>
          <div className='product-reviews-page' key={`reviews-${product.id}`}>
            <Link to={`/products/${product.id}/reviews`}>
              <button>
                Ratings
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;