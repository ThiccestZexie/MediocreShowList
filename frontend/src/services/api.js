const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;


/**
 * 
 * @returns returns the popular movies from the tmdb api
 */
export const getPopularMovies = async (page = 1) => {
  // fetch popular movies from tmdb api with page
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  // update poster_path to use the full URL
  const movies = data.results.map((movie) => ({
    ...movie,
    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  }));
  return movies;
};
/**
 * 
 * @param {*} query 
 * @returns searches for movies with the query
 */
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  const movies = data.results.map((movie) => ({
    ...movie,
    poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
  }));
  return movies;
};