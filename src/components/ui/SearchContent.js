import React from 'react';
import MovieCard from './MovieCard';

function SearchContent () {
  return (
    <>
      <h2 className="section-title">Your search results</h2>
      <div className="query">
        <p>Search query: <strong>Lorem ipsum</strong></p>
        <p>Rating: ***</p>
      </div>
      <ul className="grid">
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
        <li>
          <MovieCard />
        </li>
      </ul>
    </>
  )
}

export default SearchContent;
