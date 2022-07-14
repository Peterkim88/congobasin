import {connect} from 'react-redux';
import React from 'react';
import Product from './product';
import { showAllProducts, showOneProduct } from '../../actions/product_actions';
// import { showOneProduct } from '../../util/product_api_util';
import { selectProduct, selectReview } from '../../reducers/selectors';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { createItem } from '../../actions/cart_actions';
import { showAllItems } from "../../actions/cart_actions";
import { showAllReviews } from '../../actions/review_actions';

const mapStateToProps = (state, {match}) => {
  // const {products} = state.entities;
  const userId = state.session.id
  const productId = parseInt(match.params.id);
  const cartItems = state.entities.cart;
  // debugger
  // const selectedProduct = showOneProduct(productId);
  const selectedProduct = selectProduct(state.entities, productId);
  const selectedReviews = selectReview(state.entities, productId);
  // console.log(selectedProduct)
  // debugger
  return {
    // allProducts: products,
    selectedReviews,
    productId,
    selectedProduct,
    userId,
    cartItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllItems: (userId) => dispatch(showAllItems(userId)),
    showOneProduct: id => dispatch(showOneProduct(id)),
    createItem: (userId, item) => dispatch(createItem(userId, item)),
    showAllReviews: () => dispatch(showAllReviews)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);