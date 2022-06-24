export const createReview = (productId, review) => (
  $.ajax({
    method: 'POST',
    url: `api/products/${productId}/reviews`,
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

export const deleteReview = (productId, reviewId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/products/${productId}/reviews/${reviewId}`
  })
)