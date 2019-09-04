import React from 'react';
import defaultImage from '../../assets/default.jpg';

function MovieCard (props) {
  const {
    image,
    title,
    release,
    rating
  } = props;

  const movieImage = image ? `https://image.tmdb.org/t/p/original/${image}` : defaultImage;
  const movieImageStyle = {
    backgroundImage: `url(${movieImage})`
  }
  const year = release ? release.slice(0, 4) : 'No year provided';
  const stars = Math.round(rating) / 2;
  const starsArr = [];
  for (let i = 0; i < stars; i++) {
    starsArr.push(<i className="material-icons" key={i} style={{ color: '#FFCC46' }}>grade</i>)
  }

  return (
    <a className="movie-card">
      <div className="movie-image" style={movieImageStyle}></div>
      <div className="movie-details">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-extra-data">{year}</p>
        <div className="movie-rating">
          {starsArr}
        </div>
      </div>
    </a>
  )
}

export default MovieCard;
