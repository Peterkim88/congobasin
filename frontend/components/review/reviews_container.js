import { connect } from "react-redux";
import React from 'react';
import Reviews from "./reviews";
import { deleteReview, showAllReviews } from "../../actions/review_actions";
import { Link } from "react-router-dom";
import { selectReview, selectProduct } from "../../reducers/selectors";
// import { currentUser } from "../../reducers/selectors";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, {match}) => {
  const productId = parseInt(match.params.id);
  const selectedReviews = selectReview(state.entities, productId);
  const currentUserId = state.session.id;
  const currentProduct = selectProduct(state.entities, productId);
  return {
    selectedReviews,
    currentUserId: currentUserId,
    productId,
    currentProduct
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllReviews: () => dispatch(showAllReviews()),
    deleteReview: (productId, reviewId) => dispatch(deleteReview(productId, reviewId))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reviews));