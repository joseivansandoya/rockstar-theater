import React from 'react';

function Search (props) {
  const handleInputChange = value => {
    if (value !== '') {
      props.setRating(0);
    }
    props.setQuery(value)
  }

  return (
    <input
      type="text"
      value={props.query}
      onChange={event => handleInputChange(event.target.value)}
      className="search"
      placeholder="Search your favorite movies"
    />
  )
}

export default Search;
