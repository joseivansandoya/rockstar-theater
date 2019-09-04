import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import Header from './ui/Header';
import SearchContent from './ui/SearchContent';
import PopularContent from './ui/PopularContent';
import Footer from './ui/Footer';
import { discover, search } from '../api/interface';

const debouncedSearch = debounce(search, 200, { leading: true, trailing: false });

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
  const performSearch  = query !== '' || rating > 0;
  // perform search if query or rating states get updated
  useEffect(() => {
    if (performSearch) {
      setLoadingSearch(true);
      (async () => setSearchResult(await debouncedSearch(query, rating)))();
      setLoadingSearch(false);
    }
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
          {searchResult.length > 0 && performSearch &&
            <SearchContent
              searchResult={searchResult}
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
