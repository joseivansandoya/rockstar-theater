import React from 'react';
import MovieCard from './MovieCard';
import Loading from './Loading';

function SearchContent (props) {
  if (props.loadingSearch) {
    return <Loading />
  }

  return (
    <>
      <h2 className="section-title">Your search results</h2>

      <ul className="grid">
        {props.searchResult.map(movie => {
          return (
            <li key={movie.id}>
              <MovieCard
                id={movie.id}
                image={movie.poster_path}
                title={movie.title}
                release={movie.release_date}
                rating={movie.vote_average}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default SearchContent;
