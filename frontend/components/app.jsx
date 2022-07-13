import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import ProductsContainer from './product/products_container';
import ProductContainer from './product/product_container';
import ReviewsContainer from './review/reviews_container';
import CartContainer from './cart/cart_container';
import NavHeader from "./header/header";
import { AuthRoute } from "../util/route_util";
import { withRouter } from "react-router-dom";


const App = () => (
  <div className="full-page">
    <NavHeader />
    <Switch>
      <Route exact path='/' component={ProductsContainer} />
      <AuthRoute exact path='/login' component={LogInFormContainer} />
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
      <Route exact path='/products/:id' component={ProductContainer} />
      {/* <Route exact path='/products/:productId/reviews' component={ReviewsContainer} /> */}
      <Route exact path='/cart' component={CartContainer} />
    </Switch>
  </div>
)

export default App;