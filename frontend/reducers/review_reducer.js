import { SHOW_REVIEW, SHOW_REVIEWS } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_REVIEW:
      const selectedReview = {[action.review.id]: action.review}
      return Object.assign({}, state, selectedReview);
    case SHOW_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}

export default reviewsReducer;