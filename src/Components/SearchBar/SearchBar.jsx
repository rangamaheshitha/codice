import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
   <div className="search-bar">
    <div className="forminpu">
    <form className="search-form-d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder='Search' title="Enter search keyword"/>

        <button type="submit" title="Search" className='btn-forminput'>
<i className='bi bi-search'></i>

        </button>


    </form>
    </div>
   </div>
  )
}

export default SearchBar;