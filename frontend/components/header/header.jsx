import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SearchBar from './search/search';

const NavHeader = () => (
  <header className='top-header'>
    <Link to="/" className="logo-link">
      <img className='header-logo' src={window.headerlogoURL} alt="logo" />
    </Link>
    <SearchBar />
    <GreetingContainer className='login-box' />
    <div className="cart-box">
      <Link to="/cart" className='cart-link'>
        <img className='header-cart' src={window.cartURL} alt="cart-img" />
      </Link>
    </div>
  </header>
)

export default NavHeader;