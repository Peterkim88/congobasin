import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <div>
        Hello, <button className='header-session-button'><Link to="/login" className='header-login-button'>  Sign in</Link></button>
      </div>
      <div>
        New customer? <button className='header-session-button'><Link to="/signup" className='header-signup-button'>Sign up!</Link></button>
      </div>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="auth-group">
      <h2 className="auth-name">Hi, {currentUser.name}!</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;