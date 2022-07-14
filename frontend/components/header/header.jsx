import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SearchBar from './search/search';
import NavFooter from '../footer/footer';

const NavHeader = () => (
  <div>
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
    <div className='sub-header'>
      <NavFooter />
      <div>All</div>
      <div>Prime Video</div>
      <div>Amazon Basics</div>
      <div>Buy Again</div>
      <div>Groceries</div>
      <div>Today's Deals</div>
      <div>Prime</div>
      <div>Shopper Toolkit</div>
      <div>Health & Household</div>
    </div>
  </div>
)

export default NavHeader;