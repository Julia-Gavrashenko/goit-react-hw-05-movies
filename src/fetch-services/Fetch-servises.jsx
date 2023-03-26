import axios from 'axios';

const API_KEY = 'eb6a45a4ae6328e079a1ce9a0d7e00e8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';



export const getTrendingMovies = async () => {
  const responce = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return responce.data;
};



export const getMoviesBySearch = async () => {
  const responce = await axios.get(
    `search/movie?api_key=${API_KEY}&query=''&page=1&include_adult=false`
  );
  return responce.data;
};


export const getMovieDetails = async () => {
  const responce = await axios.get(
    `/movie/{movie_id}?api_key=${API_KEY}&query=''&page=1&include_adult=false`
  );
  return responce.data;
};

