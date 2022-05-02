import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NavHeader from "./header/header";
import { AuthRoute } from "../util/route_util";


const App = () => (
  <div>
    <NavHeader />
    <Switch>
      <AuthRoute exact path='/login' component={LogInFormContainer} />
      <AuthRoute exact path='/signup' component={SignUpFormContainer} />
    </Switch>
  </div>
)

export default App;