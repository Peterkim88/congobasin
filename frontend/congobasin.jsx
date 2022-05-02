import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
//testing start
import { showOneProduct, showAllProducts } from './actions/product_actions';
//testing end

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById('root');
  // testing start
  window.store = store;
  window.showAllProducts = showAllProducts
  window.showOneProduct = showOneProduct
  // testing end
  ReactDOM.render(<Root store={store} />, root);
});