import React from 'react';
import lion from '../../assets/lion.png';

function MovieCard () {
  return (
    <a className="movie-card">
      <div className="movie-image">
        <img src={lion} alt="movie title"/>
      </div>
      <div className="movie-details">
        <h3 className="movie-title">This is the movie title can be long</h3>
        <p className="movie-extra-data">Movie genre</p>
        <p className="movie-extra-data">2019</p>
        <div className="movie-rating">*****</div>
      </div>
    </a>
  )
}

export default MovieCard;
