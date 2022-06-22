export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: {review}
  })
)

// export const showOneReview = reviewId => (
//   $.ajax({
//     method: 'GET',
//     url: `api/reviews/${reviewId}`
//   })
// )

export const showAllReviews = productId => (
  $.ajax({
    method: 'GET',
    url: `api/products/${productId}/reviews`
  })
)

export const deleteReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  })
)