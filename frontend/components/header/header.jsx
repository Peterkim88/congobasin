import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import CartCountContainer from './cart_count/cart_count_container';
import SearchBar from './search/search';
import NavFooter from '../footer/footer';

const NavHeader = () => (
  <div className='full-header'>
    <div className='nav-header'>
      <header className='top-header'>
        <Link to="/" className="logo-link">
          <img className='header-logo' src={window.headerlogoURL} alt="logo" />
        </Link>
        <SearchBar />
        <GreetingContainer className='login-box' />
        <div className="cart-box">
          <Link to="/cart" className='cart-link'>
            <img className='header-cart-image' src={window.cartURL} alt="cart-img" />
            <div className='cart-count-box'>
              <CartCountContainer />
            </div>
          </Link>
        </div>
      </header>
      <div className='sub-header'>
        <div className='sub-header-categories-section'>
          <div className='sub-header-categories'>All</div>
          <div className='sub-header-categories'>Electronics</div>
          <div className='sub-header-categories'>Kitchen</div>
          <div className='sub-header-categories'>Computer</div>
          <div className='sub-header-categories'>Camera</div>
          <div className='sub-header-categories'>Furniture</div>
          <div className='sub-header-categories'>Health & Personal Care</div>
          <div className='sub-header-categories'>Sports</div>
          <div className='sub-header-categories'>Sports Nutrition</div>
        </div>
        <div className='sub-header-spacer'></div>
        <div className='sub-header-profile-links'>
          <NavFooter />
        </div>
      </div>
    </div>
  </div>
)

export default NavHeader;