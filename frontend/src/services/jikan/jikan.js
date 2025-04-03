// using axios to fetch data from the jikan api
import axios from 'axios';
const BASE_URL = 'https://api.jikan.moe/v4'; // for anime

export const getTopAnime = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/top/anime`, {
      params: { page: page },
    });

    // Map out only the information you need:
    const filteredAnime = response.data.data.map(anime => ({
      url: anime.url,
      title: anime.title,
      year: anime.year, // or anime.aired?.prop?.from?.year if needed
      image: anime.images?.jpg?.image_url // extract the image url from the images object
    }));

    return filteredAnime;
  } catch (error) {
    console.error('Error fetching top anime:', error);
    throw error;
  }
}

// test
const test = async () => {
  try {
    const data = await getTopAnime(2);
    console.log(data);
  } catch (error) {
    console.error('Error in test:', error);
  }
}

test(); // call the test function to see if it works