import * as APIUtil from '../util/review_api_util';

export const SHOW_REVIEWS = 'SHOW_REVIEWS';
export const SHOW_REVIEW = 'SHOW_REVIEW';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

export const showReviews = reviews => ({
  type: SHOW_REVIEWS,
  reviews
});

export const showReview = review => ({
  type: SHOW_REVIEW,
  review
});

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

export const deleteCurrentReview = (review) => ({
  type: DELETE_REVIEW,
  review
})

export const showAllReviews = productId => dispatch => (
  APIUtil.showAllReviews(productId)
    .then(reviews => (dispatch(showReviews(reviews))))
);

// export const showOneReview = reviewId => dispatch => {
//   return APIUtil.showOneReview(reviewId)
//     .then(review => (dispatch(showReview(review))))
// };

export const createReview = (productId, review) => dispatch => (
  APIUtil.createReview(productId, review)
    .then(review => (dispatch(receiveReview(review))))
);

// export const editReview = review => dispatch => (
//   APIUtil.editReview(review)
//     .then(review => (dispatch(receiveReview(review))))
// );

export const deleteReview = (productId, review) => dispatch => (
  APIUtil.deleteReview(productId, review)
    .then(review => (dispatch(deleteCurrentReview(review))))
);