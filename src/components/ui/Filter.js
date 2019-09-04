import React from 'react';
import Search from './Search';
import Rating from './Rating';

function Filter (props) {
  return (
    <>
      <Search
        query={props.query}
        setRating={props.setRating}
        setQuery={props.setQuery}
      />
      <div className="rating-wrapper">
        <span className="rating-label">Or filter by rating</span>
        <Rating
          rating={props.rating}
          setRating={props.setRating}
          setQuery={props.setQuery}
        />
      </div>
    </>
  )
}

export default Filter;
