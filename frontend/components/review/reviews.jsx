import React from 'react';
import ReviewFormContainer from './review_form_container';

class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
    this.deleteReviewButton = this.deleteReviewButton.bind(this);
  }

  componentDidMount(){
    this.props.showAllReviews()
  }

  // componentDidUpdate(prevProps, ){
    
  // }

  // deleteReview(productId, review){
  //   deleteReview(productId, review)
  // }

  deleteReviewButton(productId, review){
    if (this.props.currentUserId === review.author_id){
      return(
        <button type="submit" onClick={() => {this.props.deleteReview(productId, review.id)}}>
          Delete Review
        </button>
      )
    }
  }

  reviews(){
    const reviews = this.props.selectedReviews.map((review) => {
      return (
        <div key={`review-${review.id}`}>
          <div className='review-box'>
            <div className='review-author-name'>
              {review.author_name}
            </div>
            <br />
            {review.review_body}
            <br />
            <br />
            {this.deleteReviewButton(review.product_id, review)}
          </div>
          <br />
        </div>
      )
    })
    return (
      reviews
    );
  }

  // productInfo(){
  //   const product = this.props.currentProduct
  //   const imageUrl = product.image_url
  //   return(
  //     <div className='reviews-product-info'>

  //       <div className='reviews-product-image-box'>
  //         <img className='product-image' src={window[imageUrl]} alt='product-img' />
  //       </div>

  //       <div className='reviews-product-name'>
  //         {product.product_name}
  //       </div>

  //     </div>
  //   )
  // }

  render(){
    return (
      <div id='review-anchor' className='reviews-page'>
        <br />
        <br />
        {/* {this.productInfo()} */}
        <div className='review-left-margin'>
        </div>
        <br />
        <br />
        <div className='product-reviews-box'>
          <div className='product-reviews-heading'>
            Reviews
          </div>
          <br />
          <ReviewFormContainer />
          <br />
          {this.reviews()}
        </div>
        <div className='review-right-margin'>
        </div>
        <br />
      </div>
    )
  }
}

export default Reviews;