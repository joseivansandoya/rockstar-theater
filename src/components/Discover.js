import React from 'react';
import Header from './ui/Header';
import SearchContent from './ui/SearchContent';
import PopularContent from './ui/PopularContent';
import Footer from './ui/Footer';

function Discover (props) {
  return (
    <>
      <Header action="Discover"/>
      <div className="content">
        <div className="container">
          <SearchContent />
          <PopularContent />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Discover;
