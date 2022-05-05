import * as APIUtil from '../util/product_api_util';

export const SHOW_PRODUCTS = 'SHOW_PRODUCTS';
export const SHOW_PRODUCT = 'SHOW_PRODUCT';

export const showProducts = products => ({
  type: SHOW_PRODUCTS,
  products
});

export const showProduct = product => ({
  type: SHOW_PRODUCT,
  product
});

export const showAllProducts = products => dispatch => (
  APIUtil.showAllProducts(products)
    .then(products => (dispatch(showProducts(products))))
);

export const showOneProduct = productId => dispatch => {
  return APIUtil.showOneProduct(productId)
    .then(product => (dispatch(showProduct(product))))
};