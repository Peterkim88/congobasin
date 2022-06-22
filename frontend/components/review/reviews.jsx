import React from 'react';
import ReviewFormContainer from './review_form_container';

class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    this.props.showAllReviews()
  }

  reviews(){
    const reviews = this.props.selectedReviews.map((review) => {
      return (
        <div className='review-box' key={`review-${review.id}`}>
          {review.author_name}
          <br />
          {review.review_body}
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