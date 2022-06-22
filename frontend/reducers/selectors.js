export const selectProduct = ({products}, productId) => {
  // debugger
  return products[productId];
};

export const selectReview = ({reviews}, productId) => {
  return Object.values(reviews).filter(review => {
    if (productId === review.product_id){
      return review
    }
  });
}

export const currentUser = ({users}, userId) => {
  return users[userId];
}