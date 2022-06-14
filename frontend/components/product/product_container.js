import {connect} from 'react-redux';
import React from 'react';
import Product from './product';
import { showAllProducts, showOneProduct } from '../../actions/product_actions';
// import { showOneProduct } from '../../util/product_api_util';
import { selectProduct } from '../../reducers/selectors';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, {match}) => {
  // const {products} = state.entities;
  const productId = parseInt(match.params.id);
  // debugger
  // const selectedProduct = showOneProduct(productId);
  const selectedProduct = selectProduct(state.entities, productId);
  // debugger
  return {
    // allProducts: products,
    productId,
    selectedProduct
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showOneProduct: id => dispatch(showOneProduct(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);