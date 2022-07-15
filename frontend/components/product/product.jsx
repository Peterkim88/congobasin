import React from 'react';
import Reviews from '../review/reviews_container';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
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
      return this.setState({
        quantityToAdd: newQuantity
      })
    }
    return(
      <div className='quantity-to-add'>
        <label className='quantity-to-add-label'>Qty:</label>
        <select className='quantity-to-add-dropdown' onChange={handleQuantity}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
        </select>
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
    const average = Math.round(newTotal / reviewCount);
    const stars = this.showStars(average);
    return(
      stars
    )
  }

  reviewCount(){
    let reviewCount = 0;
    this.props.selectedReviews.map((review) => {
      reviewCount += 1;
    })
    return(reviewCount)
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
      <div className='product-whole-page'>
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
              <NavHashLink className='product-reviews-anchor-link' to={`/products/${product.id}#reviews`}>
                <div className='product-reviews-anchor-link-image-box'>
                  {this.showAverageReviewRatings()}
                </div>
                <div className='product-reviews-anchor-link-rating-count'>
                  <label>{this.reviewCount()} ratings</label>
                </div>
              </NavHashLink>
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
                <label className='free-return-message'>
                  {'& FREE Returns'}
                </label>
              </div>
              <br />
                <label className='free-delivery-message'>
                  {'FREE Delivery'}
                </label>
              <br />
              <br />
              <br />
              <br />
                <label className='instock-message'>
                  In Stock
                </label>
              <br />
              <div className='quantity-to-add-box'>
                {this.quantityToAdd()}
              </div>
              {/* <br /> */}
              <div className='add-to-cart-box'>
                {this.addItemToCart()}
              </div>
              <label className='secure-transaction-message'>
                {'Secure transaction'}
              </label>
              <br />
              <br />
              <label className='ships-from-message'>
                {'Ships from   Amazon'}
              </label>
            </div>
          </div>
        </div>
        <div id='reviews' className='product-reviews-container'>
          {/* <div className='product-reviews-page-box'> */}
            {/* <div className='product-reviews-section-left-margin'></div> */}
            <div className='review-left-margin'></div>
            <div className='product-reviews-section' key={`all-reviews-${product.id}`}>
              <ReviewsContainer />
            </div>
            <div className='review-right-margin'></div>
            {/* <div className='product-reviews-section-right-margin'></div> */}
          {/* </div> */}
        </div>
        {/* <div className="footer2">
          <NavFooter />
        </div> */}
      </div>
    )
  }
}

export default Product;