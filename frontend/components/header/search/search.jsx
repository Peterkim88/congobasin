import React from 'react';

const SearchBar = () => (
  <nav className='search-bar-box'>
    <input className="search-input" type="text" name="search here" label="search here" />
    <button className="search-button">
      <img src={window.magGlassURL} className="search-button-image" />
    </button>
  </nav>
)

export default SearchBar;