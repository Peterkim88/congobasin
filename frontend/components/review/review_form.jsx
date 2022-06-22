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
    this.currentUser = this.setAuthorId.bind(this);
    this.productId = this.setProductId.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const review = Object.assign({}, this.state);
    this.props.processForm(review);
  }

  setProductId(){
    const productId = parseInt(this.props.match.params.productId);
    return this.state.product_id = productId;
  }

  setAuthorId(){
    const authorId = 25;
    return this.state.author_id = authorId;
  }

  newReviewForm(){
    this.setProductId();
    this.setAuthorId();
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
              1 2 3 4 5
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
    return(
      <div>
        {this.newReviewForm()}
      </div>
    )
  }
}

export default ReviewForm;