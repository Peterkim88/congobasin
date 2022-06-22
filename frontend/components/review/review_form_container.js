import { connect } from "react-redux";
import React from "react";
import ReviewForm from "./review_form";
import { selectReview } from "../../reducers/selectors";
import { currentUser } from "../../reducers/selectors";
import { createReview } from "../../actions/review_actions";
import { withRouter } from "react-router";


const mapStateToProps = (state) => {
  // const productId = parseInt(match.params.productId);
  // const selectedReviews = selectReview(state.entities, productId);
  // return {
  //   selectedReviews
  // };
  const currentUserId = parseInt(state.entities.users.id)
  return{
    // currentUserId: currentUserId,
    formType: 'Sumbit Review'
  }
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (review) => dispatch(createReview(review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));