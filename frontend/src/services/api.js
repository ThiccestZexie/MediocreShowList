//const API_KEY = import.meta.env.MOVIE_API_KEY;
const API_KEY = "bf9d577cf11d6266128376fef6a0f53c"; // PLEASE DONT TAKE THIS PLESE PLEASE PLEASE I AM TOO LAZY TO MAKE A .ENV FILE
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};