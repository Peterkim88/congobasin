import {connect} from 'react-redux';
import React from 'react';
import Products from './products';
import { showAllProducts } from '../../actions/product_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  const {products} = state.entities;
  return {
    allProducts: products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAllProducts: () => dispatch(showAllProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);