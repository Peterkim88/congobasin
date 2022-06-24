import { RECEIVE_REVIEW, DELETE_REVIEW, SHOW_REVIEW, SHOW_REVIEWS } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    // case SHOW_REVIEW:
    //   const selectedReview = {[action.review.id]: action.review}
    //   return Object.assign({}, state, selectedReview);
    case RECEIVE_REVIEW:
      return Object.assign({}, state, {[action.review.id]: action.review})
    case SHOW_REVIEWS:
      return action.reviews;
    case DELETE_REVIEW:
      let nextState = Object.assign({}, state)
      delete nextState[action.review.id]
      return nextState
    default:
      return state;
  }
}

export default reviewsReducer;