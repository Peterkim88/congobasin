import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <br />
      Hello, <button><Link to="/login" className='header-login-button'>  Sign in</Link></button>
      <br />
      New customer? <button><Link to="/signup" className='header-signup-button'>Sign up!</Link></button>
      <br />
      <br />
    </nav>
  );
  const personalGreeting = () => (
    <nav className="auth-group">
      <br />
      <h2 className="auth-name">Hi, {currentUser.name}!</h2>
      <button className="auth-button" onClick={logout}>Log Out</button>
      <br />
      <br />
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;