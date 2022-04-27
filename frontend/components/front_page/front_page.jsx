import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import LoginForm, { LoginButton } from '../login_form/login_form';

class FrontPage extends React.Component {
  
  render(){
    return(
      <div>
        <h2>Front Page</h2>
        <BrowserRouter>
          <div className="login-button">
            <button>Login
              <Link to="/login" component={LoginForm}/>
            </button>
          </div>
          <div className="signup-button">
            <button>Sign Up
              {/* <Link to='/signup' component={SignupForm} /> */}
            </button>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default FrontPage;