import { SHOW_PRODUCT, SHOW_PRODUCTS } from "../actions/product_actions";

// const _nullProduct = Object.freeze({id: null})

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case SHOW_PRODUCT:
      const selectedProduct = {[action.product.id]: action.product}
      return Object.assign({}, state, selectedProduct);
    case SHOW_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export default productsReducer;