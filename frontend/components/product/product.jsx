import React from 'react';
import Reviews from '../review/reviews_container';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import LogInFormContainer from '../session_form/login_form_container';
import ReviewsContainer from '../review/reviews_container';
import NavFooter from '../footer/footer';

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quantityToAdd: 1
      // reviewCount: 0,
      // reviewTotal: 0
    };
    this.quantityToAdd = this.quantityToAdd.bind(this);
    // this.allReviewRatingState = this.allReviewRatingState.bind(this);
    this.averageReviewStars = this.averageReviewStars.bind(this);
  }

  componentDidMount(){
    // debugger
    this.props.showOneProduct(this.props.match.params.id);
    this.props.showAllItems(this.props.userId);
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
        <button className='cart-add-button' onClick={() => this.props.createItem(userId, item)}>
          Add to Cart
        </button>
      )
    } else {
      return(
        <Link to="/login" className="login-from-add-to-cart">
          <button className='cart-add-button'>
            Add to Cart
          </button>
        </Link>
      )
    }
  }

  showStars(reviewRating){
    if (reviewRating === 1){
      return (
        <div className='single-review-star-box'>
          <img src={window.oneStarRatingURL} alt="one star" />
        </div>
      )
    } else if (reviewRating === 2){
      return (
        <div className='single-review-star-box'>
          <img src={window.twoStarRatingURL} alt="two star" />
        </div>
      )
    } else if (reviewRating === 3){
      return (
        <div className='single-review-star-box'>
          <img src={window.threeStarRatingURL} alt="three star" />
        </div>
      )
    } else if (reviewRating === 4){
      return (
        <div className='single-review-star-box'>
          <img src={window.fourStarRatingURL} alt="four star" />
        </div>
      )
    } else if (reviewRating === 5){
      return (
        <div className='single-review-star-box'>
          <img className='single-review-star-image' src={window.fiveStarRatingURL} alt="five star" />
        </div>
      )
    } 
  }

  // allReviewRatingState(reviewRating){
  //   const newCount = this.state.reviewCount + 1;
  //   const newTotal = this.state.reviewTotal + reviewRating;
  //   this.setState({
  //     reviewCount: newCount,
  //     reviewTotal: newTotal
  //   })
  // }

  averageReviewStars(){
    const average = this.state.reviewTotal / this.state.reviewCount;
    return average;
  }

  showAverageReviewRatings(){
    // this.props.selectedReviews.map((review) => {
    //   const newCount = this.state.reviewCount + 1;
    //   const newTotal = this.state.reviewTotal + review.review_rating;
    //   this.setState({
    //     reviewCount: newCount,
    //     reviewTotal: newTotal
    //   })
    // });
    let reviewCount = 0;
    let newTotal = 0;
    this.props.selectedReviews.map((review) => {
      reviewCount += 1;
      newTotal += review.review_rating;
    })
    const average = newTotal / reviewCount;
    const stars = this.showStars(average);
    return(
      stars
    )
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
                {this.showAverageReviewRatings()}
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
        <div className='product-reviews-page-box'>
          <div></div>
          <div id="reviews" className='product-review-section' key={`all-reviews-${product.id}`}>
            <ReviewsContainer />
          </div>
          <div></div>
        </div>
        <div className="footer2">
          <NavFooter />
        </div>
      </div>
    )
  }
}

export default Product;