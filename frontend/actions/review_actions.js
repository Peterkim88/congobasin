import * as APIUtil from '../util/review_api_util';

export const SHOW_REVIEWS = 'SHOW_REVIEWS';
export const SHOW_REVIEW = 'SHOW_REVIEW';

export const showReviews = reviews => ({
  type: SHOW_REVIEWS,
  reviews
});

export const showReview = review => ({
  type: SHOW_REVIEW,
  review
});

export const showAllReviews = reviews => dispatch => (
  APIUtil.showAllReviews(reviews)
    .then(reviews => (dispatch(showReviews(reviews))))
);

export const showOneReview = reviewId => dispatch => {
  return APIUtil.showOneReview(reviewId)
    .then(review => (dispatch(showReview(review))))
};