import React from 'react';
import ReactRating from 'react-rating';

function Rating (props) {
  const ratingProps = {
    rating: props.rating,
    initialRating: props.rating,
    placeholderRate: 10,
    start: 0,
    stop: 10,
    step: 2,
    emptySymbol: <i className="material-icons" style={{ color: '#e4e4e4' }}>grade</i>,
    fullSymbol: <i className="material-icons" style={{ color: '#FFCC46' }}>grade</i>,
    onChange: value => {handleRatingChange(value)}
  }

  const handleRatingChange = value => {
    if (value > 0) {
      props.setQuery('');
    }
    ratingProps.initialRating = value;
    props.setRating(value)
  }

  return (
    <div className="rating">
      <ReactRating {...ratingProps} />
    </div>
  )
}

export default Rating;
