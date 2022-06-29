export const selectProducts = ({products, cartItems}, userId) => {
  return Object.values(products).map(product => {
    return Object.values(cartItems).map(item => {
      if (product.id === item.product_id && item.user_id === userId){
        return product
      }
    })
  })
};

export const selectReview = ({reviews}, productId) => {
  return Object.values(reviews).filter(review => {
    if (productId === review.product_id){
      return review
    }
  });
}

export const selectCartItems = ({cart}) => {
  return Object.values(cart).map(item => {
    if (userId === item.user_id){
      return item
    }
  });
}

export const currentUser = ({users}, userId) => {
  return users[userId];
}