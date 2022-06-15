import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      author_id: '',
      product_id: '',
      review_rating: '',
      review_body: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.processForm(review);
  }

  newReviewForm(){
    return (
      <div>
        Submit a new review
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.newReviewForm()}
      </div>
    )
  }
}

export default ReviewForm;