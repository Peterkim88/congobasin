import React from 'react';

class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }

  componentDidMount(){
    this.props.showAllReviews()
  }

  render(){
    const reviews = this.props.selectedReviews.map((review) => {
      return (
        <div>
          {review.review_body}
        </div>
      )
    })
    return (
      <div>
        {reviews}
        {/* All Reviews */}
      </div>
    )
  }
}

export default Reviews;