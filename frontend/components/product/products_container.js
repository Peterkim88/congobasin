import {connect} from 'react-redux';
import React from 'react';
import Products from './products';
import { showAllProducts } from '../../actions/product_actions';
import { showAllItems } from '../../actions/cart_actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  const {products} = state.entities;
  const userId = state.session.id;
  return {
    allProducts: products,
    userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllProducts: () => dispatch(showAllProducts()),
    showAllItems: (userId) => dispatch(showAllItems(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);