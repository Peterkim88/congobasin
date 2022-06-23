import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      author_id: '',
      product_id: '',
      review_rating: '',
      review_body: '',
      author_name: 'Test User'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.currentUser = this.setAuthorId.bind(this);
    this.productId = this.setProductId.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount(){
    this.setProductId();
    this.setAuthorId();
  }

  handleSubmit(e){
    e.preventDefault();
    const productId = parseInt(this.props.match.params.productId);
    // console.log(productId)
    const review = Object.assign({}, this.state);
    this.props.processForm(productId, review);
  }

  setProductId(){
    const productId = parseInt(this.props.match.params.productId);
    // return this.state.product_id = productId;
    this.setState({product_id: productId});
  }

  setAuthorId(){
    const authorId = this.props.currentUserId;
    // console.log(this.props.currentUserId)
    this.setState({author_id: authorId});
  }

  checkCurrentUserReview(){
    let currentUserReview = null
    this.props.selectedReviews.map(review => {
      if (this.props.currentUserId === review.author_id){
        currentUserReview = true
      }
    })
    return currentUserReview;
  }

  newReviewForm(){
    // console.log(this.state)
    // return (
    //   <div>
    //     {this.state.product_id}
    //     {this.state.author_id}
    //     {this.state.review_rating}
    //     {this.state.review_body}
    //   </div>
    // )
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="review-form-box">
          <h1 className='review-form-heading'>Submit a review for this product!</h1>
          {/* <label className='review-form-product-id'>product id
            <br />
              {this.state.product_id}
            <br />
          </label>
          <label className='review-form-author-id'>author id
            <br />
              {this.state.author_id}
            <br />
          </label> */}
          <label className='review-form-rating'>pick a number from 1 to 5
            <br />
              <input type="radio" name='review_rating' id="rating1" value='1' onChange={this.update('review_rating')}/>
              <input type="radio" name='review_rating' id="rating2" value='2' onChange={this.update('review_rating')}/>
              <input type="radio" name='review_rating' id="rating3" value='3' onChange={this.update('review_rating')}/>
              <input type="radio" name='review_rating' id="rating4" value='4' onChange={this.update('review_rating')}/>
              <input type="radio" name='review_rating' id="rating5" value='5' onChange={this.update('review_rating')}/>
              {/* ask how to make this into the stars and 
              how to populate the lower ratings
              while choosing the higher ones */}
            <br />
          </label>
          <label className='review-form-body'>leave a review!
            <br />
              <input className='review-form-body-input'
                type="text" 
                onChange={this.update('review_body')}  
              />
            <br />
          </label>
          <input className='review-form-submit'
            type="submit"
            value={this.props.formType}
          />
        </form>
      </div>
    )
  }

  render(){
    // console.log(this.props)
    // console.log(this.props.selectedReviews.id)
    if (this.props.currentUserId !== null && this.checkCurrentUserReview() === null){
      return(
        <div>
          {this.newReviewForm()}
        </div>
      )
    }
    // if (this.props.currentUserId !== null){
    //   return {this.newReviewForm()}
    // }
  }
}

export default ReviewForm;