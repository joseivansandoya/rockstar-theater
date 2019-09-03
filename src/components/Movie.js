import React from 'react';
import Header from './ui/Header';
import Footer from './ui/Footer';

import lion from '../assets/lion.png';

function Movie (props) {
  return (
    <>
      <Header action="Movie"/>
      <div className="content movie-content">
        <div className="container">
          <div className="movie-cover">
            <img src={lion} alt="Movie title"/>
          </div>
          <div className="movie-details">
            <h2>This is the title</h2>
            <p className="extra">Movie Genre</p>
            <p className="extra">2018</p>
            <p className="extra">Universal</p>
            <p className="synopsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae iaculis nisl. Suspendisse eget lectus neque. Aliquam et porta felis. Vivamus ultrices ultrices fermentum. Fusce leo lectus, accumsan viverra tristique eget, feugiat id libero. Sed non nulla malesuada, convallis est quis, tempus ipsum. Phasellus sed venenatis arcu. Nam a malesuada turpis, nec porttitor orci. Duis porttitor blandit maximus. Praesent molestie ex vel nisl lacinia auctor. Etiam efficitur rhoncus lectus, sit amet aliquam dui scelerisque ac. Cras pharetra, massa sit amet dictum interdum, quam quam sollicitudin nunc, rutrum vulputate turpis nunc quis odio. Phasellus ultrices laoreet pellentesque. Nam blandit, dui sit amet aliquam iaculis, eros leo scelerisque enim, sed aliquet orci libero quis lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, nunc eget lobortis mattis, purus nibh scelerisque neque, id fringilla metus lectus sit amet neque.</p>

            <div className="back">
              <a href="">Back to Discover</a>
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
