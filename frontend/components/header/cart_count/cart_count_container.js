import { connect } from "react-redux";
import React from "react";
import CartCount from "../cart_count/cart_count";
import { showAllItems } from "../../../actions/cart_actions";
import { withRouter } from "react-router";

const mapStateToProps = state => {
  const userId = state.session.id;
  const cartItems = state.entities.cart;
  return{
    userId,
    cartItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showAllItems: (userId) => dispatch(showAllItems(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartCount))