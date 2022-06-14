import { connect } from "react-redux";
import React from 'react';
import Reviews from "./reviews";
import { showAllReviews } from "../../actions/review_actions";
import { Link } from "react-router-dom";
import { selectReview } from "../../reducers/selectors";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, {match}) => {
  const productId = parseInt(match.params.id);
  const selectedReviews = selectReview(state.entities, productId);
  return {
    selectedReviews
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllReviews: () => dispatch(showAllReviews())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reviews));