import React from 'react';
import Search from './Search';
import Rating from './Rating';

function Filter (props) {
  return (
    <>
      <Search />
      <div className="rating-wrapper">
        <span className="rating-label">Or filter by rating</span>
        <Rating />
      </div>
    </>
  )
}

export default Filter;
