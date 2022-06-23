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

  deleteReview(review){
    return(
      <div>
        <button type="submit" on></button>
      </div>
    )
  }

  deleteReviewButton(review){
    if (this.props.currentUserId === review.author_id){
      return(
        <button type="submit" onClick={this.deleteReview()}>
          
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
          {this.deleteReviewButton(review)}
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