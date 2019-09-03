import React from 'react';
import ReactRating from 'react-rating';

function Rating () {
  const ratingProps = {
    rating: 0,
    placeholderRate: 10,
    start: 0,
    stop: 10,
    step: 2,
    emptySymbol: <i className="material-icons" style={{ color: '#e4e4e4' }}>grade</i>,
    fullSymbol: <i className="material-icons" style={{ color: '#FFCC46' }}>grade</i>
  }

  return (
    <div className="rating">
      <ReactRating {...ratingProps} />
    </div>
  )
}

export default Rating;
