export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: {review}
  })
)

export const showOneReview = reviewId => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${reviewId}`
  })
)

export const showAllReviews = () => (
  $.ajax({
    method: 'GET',
    url: `api/reviews`
  })
)

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  })
)