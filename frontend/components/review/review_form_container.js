import { connect } from "react-redux";
import React from "react";
import ReviewForm from "./review_form";
import { selectReview } from "../../reducers/selectors";
import { currentUser } from "../../reducers/selectors";
import { createReview } from "../../actions/review_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, {match}) => {
  const productId = parseInt(match.params.productId);
  const selectedReviews = selectReview(state.entities, productId);
  // return {
  //   selectedReviews
  // };
  // const currentUser = state.entities.users
  // console.log(currentUser)
  const currentUserId = state.session.id
  // console.log(currentUserId)
  return{
    currentUserId,
    selectedReviews,
    productId,
    formType: 'Sumbit Review'
  }
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (productId, review) => dispatch(createReview(productId, review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));