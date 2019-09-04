import React from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import Loading from './Loading';
import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";

function PopularContent (props) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  if (props.loadingPopular) {
    return <Loading />
  }

  return (
    <>
      <h2 className="section-title">Popular Movies</h2>
      <div className="slider-wrapper">
        <Slider {...sliderSettings}>
          {props.popular.map(movie => {
            return (
              <div key={movie.id}>
                <MovieCard
                  image={movie.poster_path}
                  title={movie.title}
                  release={movie.release_date}
                  rating={movie.vote_average}
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default PopularContent;
