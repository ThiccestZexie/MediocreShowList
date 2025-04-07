// using axios to fetch data from the jikan api
import axios from 'axios';
const BASE_URL = 'https://api.jikan.moe/v4'; // for anime
/**
 * 
 * @param {Page Wanted} page 
 * @returns Returns the  anime on set page from the jikan api sorted by raiting
 */
export const getTopAnime = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/top/anime`, {
      params: { page: page },
    });

    // Map out only the information you need:
    const filteredAnime = response.data.data.map(anime => ({
      id: anime.mal_id,
      url: anime.url,
      title: anime.title,
      release_date: anime.year, // or anime.aired?.prop?.from?.year if needed
      poster_path: anime.images?.jpg?.image_url // extract the image url from the images object
    }));

    return filteredAnime;

  } catch (error) {
    console.error('Error fetching top anime:', error);
    throw error;
  }
}

/**
 * 
 * @param {searches with said query} query 
 * @returns Returns the anime that matches the query from the jikan api
 */
export const searchAnime = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/anime`, {
      params: { q: query },
    });
    const filteredAnime= response.data.data.map(anime => ({
      id: anime.mal_id,
      url: anime.url,
      title: anime.title,
      year: anime.year, // or anime.aired?.prop?.from?.year if needed
      poster_path: anime.images?.jpg?.image_url // extract the image url from the images object
    }));
    return filteredAnime;
  }
  catch (error) {
    console.error('Error searching anime:', error);
    throw error;
  }

}
