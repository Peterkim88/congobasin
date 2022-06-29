import { connect } from "react-redux";
import React from 'react';
import Cart from "./cart";
import { deleteItem, showAllItems } from "../../actions/cart_actions";
import { withRouter } from "react-router";
import { selectCartItems, selectProducts } from "../../reducers/selectors";

const mapStateToProps = (state) => {
  const userId = state.session.id;
  // console.log(state.entities)
  // const cartItems = selectCartItems(state.entities, userId) 
  // console.log(cartItems)
  const products = state.entities.products;
  const cartItems = state.entities.cart;
  const productInfo = selectProducts({products, cartItems}, userId)
  return {
    userId,
    cartItems,
    products,
    productInfo
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllItems: (userId) => dispatch(showAllItems(userId)),
    deleteItem: (userId, item) => dispatch(deleteItem(userId, item))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));