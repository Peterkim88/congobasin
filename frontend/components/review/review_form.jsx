import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      author_id: '',
      product_id: '',
      review_rating: 1,
      review_body: '',
      author_name: '',
      starImgURL: window.zeroStarRatingURL
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.currentUser = this.setAuthorId.bind(this);
    this.productId = this.setProductId.bind(this);
    this.newReviewForm = this.newReviewForm.bind(this);
  }

  update(field){
    // debugger
    return e => this.setState({
      [field]: e.currentTarget.value
    });
    // console.log(this.state.review_rating)
    // console.log(this.state.starImgURL)
  }

  updateImg(){
    // debugger
    // e => this.showStars(e.currentTarget.value)
    return e => {
      if (e.currentTarget.value === '1'){
        this.setState({starImgURL: window.oneStarRatingURL})
      } else if (e.currentTarget.value === '2'){
        this.setState({starImgURL: window.twoStarRatingURL})
      } else if (e.currentTarget.value === '3'){
        this.setState({starImgURL: window.threeStarRatingURL})
      } else if (e.currentTarget.value === '4'){
        this.setState({starImgURL: window.fourStarRatingURL})
      } else if (e.currentTarget.value === '5'){
        this.setState({starImgURL: window.fiveStarRatingURL})
      }
    }
    // debugger
  }

  componentDidMount(){
    this.setProductId();
    this.setAuthorId();
    this.setAutherName();
  }

  // componentDidUpdate(){
  //   return this.showStars(this.state.review_rating)
  // }

  handleSubmit(e){
    e.preventDefault();
    const productId = parseInt(this.props.match.params.id);
    // console.log(productId)
    const review = Object.assign({}, this.state);
    this.props.processForm(productId, review);
  }

  setProductId(){
    const productId = parseInt(this.props.match.params.id);
    // return this.state.product_id = productId;
    this.setState({product_id: productId});
  }

  setAuthorId(){
    const authorId = this.props.currentUserId;
    // console.log(this.props.currentUserId)
    this.setState({author_id: authorId});
  }

  setAutherName(){
    const authorName = this.props.currentUserName;
    this.setState({author_name: authorName});
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

  showStars(reviewRating){
    if (reviewRating === 1){
      this.setState({starImgURL: window.oneStarRatingURL})
    } else if (reviewRating === 2){
      this.setState({starImgURL: window.twoStarRatingURL})
    } else if (reviewRating === 3){
      this.setState({starImgURL: window.threeStarRatingURL})
    } else if (reviewRating === 4){
      this.setState({starImgURL: window.fourStarRatingURL})
    } else if (reviewRating === 5){
      this.setState({starImgURL: window.fiveStarRatingURL})
    } 
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
          {/* <h1 className='review-form-heading'>Submit a review for this product!</h1> */}
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
          <div>
            <div className='review-form-rating'>Rate this product!
              <br />
                <input type="radio" name='review_rating' id="rating1" value='1' onChange={this.update('review_rating')} onClick={this.updateImg()}/>
                <input type="radio" name='review_rating' id="rating2" value='2' onChange={this.update('review_rating')} onClick={this.updateImg()}/>
                <input type="radio" name='review_rating' id="rating3" value='3' onChange={this.update('review_rating')} onClick={this.updateImg()}/>
                <input type="radio" name='review_rating' id="rating4" value='4' onChange={this.update('review_rating')} onClick={this.updateImg()}/>
                <input type="radio" name='review_rating' id="rating5" value='5' onChange={this.update('review_rating')} onClick={this.updateImg()}/>
                {/* ask how to make this into the stars and 
                how to populate the lower ratings
              while choosing the higher ones */}
              <br />
            </div>
              <img src={this.state.starImgURL} alt="stars" />
          </div>
          <label className='review-form-body'>Leave a review!
            <br />
              <textarea className='review-form-body-input'
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