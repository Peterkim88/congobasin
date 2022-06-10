import { connect } from "react-redux";
import Reviews from "./reviews";

const mapStateToProps = (state) => {
  const {reviews} = state.entities;
  return {
    allReviews: reviews
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllReviews: () => dispatch(showAllReviews())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);