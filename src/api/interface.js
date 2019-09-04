import config from './config';
const { endpoint, api_key } = config;

async function fetchMovies (url) {
  const response = await fetch(url);
  const json_response = await response.json();
  let results = [];
  if (json_response.total_results > 0) {
    results = json_response.results;
  }
  // maximum 9 results
  return results.slice(0, 9);
}

export async function discover () {
  const url = `${endpoint}/discover/movie?sort_by=vote_average.desc&api_key=${api_key}`;
  return await fetchMovies(url);
}

export async function search (query = '', rating = 0) {
  let url = `${endpoint}/search/movie?query=${encodeURI(query)}&api_key=${api_key}`;
  if (rating > 0) {
    const min = rating - 2;
    const max = rating;
    url = `${endpoint}/discover/movie?vote_average.gte=${min}&vote_average.lte=${max}&api_key=${api_key}`;
  }
  return await fetchMovies(url);
}

export async function getMovie (id) {
  const url = `${endpoint}/movie/${id}?api_key=${api_key}`;
  const response = await fetch(url);
  const json_response = await response.json();
  return json_response;
}
