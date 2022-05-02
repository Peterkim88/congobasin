import React from 'react';

const SearchBar = () => (
  <nav className='search-bar-box'>
    <input className="search-input" type="text" name="search here" label="search here" />
    <button className="search-button" type='submit' >O</button>
  </nav>
)

export default SearchBar;