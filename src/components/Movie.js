import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';
import Loading from './ui/Loading';
import { getMovie } from '../api/interface';
import defaultImage from '../assets/default.jpg';

import lion from '../assets/lion.png';

function Movie (props) {
  const { match } = props;
  const movieId = match.params.id;

  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (movieId) {
      setLoading(true);
      (async () => setMovieData(await getMovie(movieId)))();
      setLoading(false);
    }
  }, []);

  if (props.loading) {
    return <Loading />
  }

  const movieImage = movieData.poster_path ? `https://image.tmdb.org/t/p/original/${movieData.poster_path}` : defaultImage;
  const year = movieData.release_date ? movieData.release_date.slice(0, 4) : 'No year provided';
  let company = '';
  if (movieData.production_companies && movieData.production_companies.length > 0) {
    company = movieData.production_companies[0].name;
  }
  const stars = Math.round(movieData.vote_average) / 2;
  const starsArr = [];
  for (let i = 0; i < stars; i++) {
    starsArr.push(<i className="material-icons" key={i} style={{ color: '#FFCC46' }}>grade</i>)
  }

  return (
    <>
      <Header action="Movie"/>
      <div className="content movie-content">
        <div className="container">
          <div className="movie-cover">
            <img src={movieImage} alt={movieData.title}/>
          </div>
          <div className="movie-details">
            <h2>{movieData.title}</h2>
            <p className="extra">{year}</p>
            <p className="extra">{company}</p>
            <div className="movie-rating">
              {starsArr}
            </div>

            <p className="synopsis">{movieData.overview}</p>

            <div className="back">
              <Link to="/">
                <span>Back to Discover</span>
              </Link>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movie;
