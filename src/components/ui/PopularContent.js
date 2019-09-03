import React from 'react';
import Slider from 'react-slick';
import MovieCard from './MovieCard';
import "../../styles/slick.css"; 
import "../../styles/slick-theme.css";

function PopularContent () {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <>
      <h2 className="section-title">Popular Movies</h2>
      <div className="slider-wrapper">
        <Slider {...sliderSettings}>
          <div>
            <MovieCard />
          </div>
          <div>
            <MovieCard />
          </div>
          <div>
            <MovieCard />
          </div>
          <div>
            <MovieCard />
          </div>
          <div>
            <MovieCard />
          </div>
          <div>
            <MovieCard />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default PopularContent;
