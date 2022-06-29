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
        <div className='review-box' key={`review-${review.id}`}>
          {review.author_name}
          <br />
          {review.review_body}
          <br />
          {this.deleteReviewButton(review.product_id, review)}
          <br />
        </div>
      )
    })
    return (
      reviews
    );
  }

  render(){
    return (
      <div>
        <div>
          <ReviewFormContainer />
        </div>
        {this.reviews()}
      </div>
    )
  }
}

export default Reviews;