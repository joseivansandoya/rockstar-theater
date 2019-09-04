import React, { useState, useEffect } from 'react';
import Header from './ui/Header';
import SearchContent from './ui/SearchContent';
import PopularContent from './ui/PopularContent';
import Footer from './ui/Footer';
import { discover, search } from '../api/interface';

function Discover () {

  // popular movies data
  const [popular, setPopular] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(false);
  // once component gets mounted perform popular movies fetch
  useEffect(() => {
    setLoadingPopular(true);
    (async () => setPopular(await discover()))();
    setLoadingPopular(false);
  }, [])

  //search movies data
  const [searchResult, setSearchResult] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [rating, setRating] = useState(0);
  // perform search if query or rating states get updated
  useEffect(() => {
    setLoadingSearch(true);
    (async () => setSearchResult(await search(query, rating)))();
    setLoadingSearch(false);
  }, [query, rating])

  return (
    <>
      <Header 
        action="Discover"
        query={query}
        setQuery={setQuery}
        rating={rating}
        setRating={setRating}
      />

      <div className="content">
        <div className="container">
          {searchResult.length > 0 &&
            <SearchContent
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              loadingSearch={loadingSearch}
            />
          }

          <PopularContent
            popular={popular}
            loadingPopular={loadingPopular}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Discover;
